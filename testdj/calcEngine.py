import sys



def get_max(A1, rlt1, A2, rlt2):
    if isinstance(A1, int) and isinstance(rlt1, int) and isinstance(A2, int) and isinstance(rlt2, int):
        tempX1 = int(rlt1 / A1)
        tempX2 = int(rlt2 / A2)
        return min(tempX1, tempX2)
    else:
        print("The variables for X should be int and greater than 0")


def get_max_rlt(A1, A2, A3, B1, B2, B3, C1, C2, C3, rlt1, rlt2):
    maxRlt = 0
    mX = 0
    mY = 0
    mZ = 0

    maxX = get_max(A1, rlt1, A2, rlt2)
    maxY = get_max(B1, rlt1, B2, rlt2)

    for idX in range(maxX, 0, -1):
        for idY in range(maxY, 0, -1):
            minZ = (rlt1 - A1*idX - B1*idY) / C1
            z2 = (rlt2 - A2*idX - B2*idY) / C2
            if minZ > z2:
                minZ = z2
            #print "x=%d, y=%d, z=%d" %(idX,idY, int(minZ))
            if minZ < 1:
                continue
            rangeZ = range(int(minZ), 0, -1)
            #print "rangeZ is: ", rangeZ
            for idZ in rangeZ:
                rlt = A3*idX + B3*idY + C3*idZ
                if rlt > maxRlt:
                   maxRlt = rlt
                   mX = idX
                   mY = idY
                   mZ = idZ

    print('X is: {}\nY is: {}\nZ is: {}\nmax value is: {}'.format(mX, mY, mZ, maxRlt))
    return (mX, mY, mZ, maxRlt)

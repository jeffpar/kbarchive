---
layout: page
title: "Q71971: Calculating the Checksum for a Segmented-Executable File"
permalink: /kb/071/Q71971/
---

## Q71971: Calculating the Checksum for a Segmented-Executable File

	Article: Q71971
	Product(s): Microsoft Programming Utilities
	Version(s): 5.0x,5.1,5.11,5.13,5.15,5.1x,5.2,5.3x,5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.0x, 5.1x, 5.2, 5.3x, 5.5, 5.6 
	- Microsoft LINK for OS/2, versions 5.0x, 5.1, 5.11, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The header of an executable file created by Microsoft LINK contains two
	different checksum values. The first, located at offset 12-13h in the old .EXE
	header, is the complemented checksum of all words in the file. The second,
	located at offset 08-0Bh in the new .EXE header, is the 32-bit checksum of all
	DWORD values in the file. The text below describes the process involved to
	calculate these checksum values.
	
	MORE INFORMATION
	================
	
	The following information that describes calculating the first checksum is from
	page 122 or the "MS-DOS Encyclopedia" (Microsoft Press):
	
	  12-13H (Complemented Checksum) This word contains the one's complement of the
	  summation of all words in the .EXE file. Current versions of MS-DOS basically
	  ignore this word when they load a .EXE program; however, future versions
	  might not. When LINK generates a .EXE file, it adds together all the contents
	  of the .EXE file (including the .EXE header) by treating the entire file as a
	  long sequence of 16-bit words. During this addition, LINK gives the
	  Complemented Checksum word (12-13H) a temporary value of 0000H. If the file
	  consists of an odd number of bytes, then the final byte is treated as a word
	  with a high byte of 00H. Once LINK has totaled all words in the .EXE file, it
	  performs a one's complement operation on the total and records the answer in
	  the .EXE file header at offsets 12-13H. The validity of a .EXE file can then
	  be checked by performing the same word-totaling process as LINK performed.
	  The total should be FFFFH, because the total will include LINK's calculated
	  complemented checksum, which is designed to give the file the FFFFH total.
	
	The sample code below shows one implementation of this technique.
	
	Note that Microsoft LINK does not correctly calculate the checksum if the linker
	command line includes the /CODEVIEW or /EXEPACK option switches. However,
	because the MS-DOS, Microsoft Windows, and OS/2 versions 1.x do not verify the
	checksum, this behavior does not present a problem under normal circumstances.
	Microsoft LINK version 5.3 and later do not compute a 16-bit or 32-bit checksum.
	The reserved bytes in the .EXE header are set to zero.
	
	The system uses the old .EXE header checksum when an MS-DOS application runs.
	However, for any other type of executable file, (an application or dynamic-link
	library [DLL] for Windows or OS/2 versions 1.x, or a bound application), LINK
	computes a 32-bit checksum for the new .EXE header. This calculation is only
	slightly more complicated than that discussed earlier.
	
	First of all, the checksum is not the sum of every DWORD value in the physical
	file. It is the sum of the DWORD values in the executable portion of the file.
	As other items, like resources, symbolic information, and so on, are added to
	the .EXE file, the checksum value does not change. To determine the size of the
	executable file, look at the two words at offset 02h and 04h in the old .EXE
	file header.
	
	Second, the 32-bit checksum is the sum of each DWORD value in the executable file
	EXCEPT for the checksum itself. Because Microsoft LINK does not perform a
	complement operation, the result is NOT FFFFFFFFh when all DWORD values are
	summed.
	
	The following code example demonstrates calculating these checksum values.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: none
	   */ 
	
	  #include <stdio.h>
	  #include <stdlib.h>
	  #include <io.h>
	
	  void Calc16ChkSum(FILE *fp);
	  void Calc32ChkSum(FILE *fp);
	  void main(int, char **);
	
	  FILE *fp;
	  unsigned long NewHdrOffset, FileSize = 0L;
	  unsigned int PageCnt;
	
	  #define NEWHDROFFSET  0x3C   /* Location in Old Header with offset
	                                  of new header in EXE */ 
	
	  void main (int argc, char * argv[])
	  {
	     if (argc != 2)
	        {
	        printf("\n\nUsage: %s <EXEfilename>\n\n", argv[0]);
	        exit(-1);
	        }
	
	     if ((fp = fopen(argv[1], "rb")) == NULL)
	        {
	        printf("\n\nError: Unable to open file : %s\n\n", argv[1]);
	        exit(-1);
	        }
	
	     fread(&PageCnt, sizeof(int), 1, fp); /* Read past the signature */ 
	     fread(&PageCnt, sizeof(int), 1, fp); /* Read the last page size */ 
	     FileSize = PageCnt;
	     fread(&PageCnt, sizeof(int), 1, fp); /* Read the full page count */ 
	
	     if (FileSize == 0L)
	        FileSize = PageCnt * 512;
	     else
	        FileSize += (PageCnt - 1) * 512;
	
	     fseek(fp, NEWHDROFFSET, SEEK_SET);  /* Locate the New EXE offset */ 
	     fread(&NewHdrOffset, sizeof(long), 1, fp);  /* and read it */ 
	
	     if (NewHdrOffset == 0L)
	        Calc16ChkSum(fp);
	     else
	        Calc32ChkSum(fp);
	
	     fcloseall();
	     return;
	  }
	
	  void Calc16ChkSum(FILE *fp)
	  {
	     unsigned int sum16, NxtInt, x;
	     unsigned char NxtChar;
	
	     sum16 = 0;
	     fseek(fp, 0, SEEK_SET);
	
	     for (x = 0L; x < FileSize / 2L; x++)
	        {
	        fread(&NxtInt, sizeof(int), 1, fp);
	        sum16 += NxtInt;
	        }
	
	     /* make sure and get the last byte if odd size... */ 
	
	     if (FileSize % 2)
	        {
	        fread(&NxtChar, sizeof(char), 1, fp);
	        sum16 += (unsigned int)NxtChar;
	        }
	
	     printf("\nThe 16 bit checksum should be FFFF, it is %x\n\n",
	           sum16);
	  }
	
	  void Calc32ChkSum(FILE *fp)
	  {
	     unsigned long sum32, NxtLong, CheckSum32, x;
	     unsigned char NxtByte, y;
	
	     sum32 = 0;
	     fseek(fp, 0, SEEK_SET);
	
	     /* Calculate the number of DWORDs before the checksum, and add
	      * them together.
	      * (Note: The checksum *always* starts on a DWORD boundary.) */ 
	
	     x = (NewHdrOffset + 8) / 4;
	
	     for ( ; x; x--)
	        {
	        fread(&NxtLong, sizeof(long), 1, fp);
	        sum32 += NxtLong;
	        }
	
	     /* Read the actual check sum... */ 
	
	     fread(&CheckSum32, sizeof(long), 1, fp);
	     /* Then the rest of the DWORDs in the file. */ 
	
	     for (x = 0; x < (FileSize - NewHdrOffset - 12) / 4; x++)
	        {
	        fread(&NxtLong, sizeof(long), 1, fp);
	        sum32 += NxtLong;
	        }
	
	     /* We have to account for the extra bytes in the file. Basically,
	      * they are used to form a long with the high order bytes set to
	      * zero. */ 
	
	     if (0L != (x = FileSize % 4L))
	        {
	        NxtLong = 0L;
	        for (y = 0 ; y < x ; y++)
	           {
	           fread(&NxtByte, sizeof(char), 1, fp);
	           NxtLong += (unsigned long)NxtByte << (8 * y);
	           }
	        sum32 += NxtLong;
	        }
	
	     printf("\nThe 32-bit checksum should be %lx, it is %lx\n\n",
	             CheckSum32, sum32);
	  }
	
	Additional query words: kbinf 5.0x 5.10 5.11 5.13 5.15 5.1x 5.20 5.3x LinkIss 5.50 5.60 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK50xDOSSearch kbLINK510xDOSSearch kbLINK530xDOSSearch kbLINK50xOS2Search kbLINK520DOS kbLINK550DOS kbLINK560DOS kbLINK510OS2 kbLINK511OS2 kbLINK513OS2 kbLINK515OS2
	Version           : :5.0x,5.1,5.11,5.13,5.15,5.1x,5.2,5.3x,5.5,5.6
	
	=============================================================================
	

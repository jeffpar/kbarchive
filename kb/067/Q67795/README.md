---
layout: page
title: "Q67795: EXE File Checksum Incorrect If LINK /CO or /E Option Used"
permalink: /kb/067/Q67795/
---

## Q67795: EXE File Checksum Incorrect If LINK /CO or /E Option Used

{% raw %}

	Article: Q67795
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS 
	- Microsoft LINK for OS/2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to "The MS-DOS Encyclopedia," an MS-DOS .EXE file contains a checksum
	value in its .EXE file header. This checksum value should make the sum of all
	words in the .EXE file equal FFFFh. However, if the LINK command line specifies
	the /CODEVIEW or /EXEPACK options, LINK does not calculate the checksum
	correctly. Because current versions of MS-DOS ignore this checksum, this does
	not cause any noticeable problems.
	
	Note that Microsoft LINK versions 5.3 and later do not compute a checksum value.
	The reserved bytes in the .EXE header are set to zero.
	
	MORE INFORMATION
	================
	
	The following code example calculates the checksum for a specified MS-DOS
	executable file.
	
	Sample Code
	-----------
	
	  #include <stdio.h>
	  #include <stdlib.h>
	
	  main (int argc, char * argv[])
	  {
	     FILE * fp;
	     unsigned int nxt = 0, sum = 0;
	     unsigned char bl, bh;
	
	     if (argc != 2)
	        exit(-1);
	     if ((fp = fopen(argv[1], "rb")) == NULL)
	        exit(-1);
	     while (!feof(fp))
	     {
	        bl = fgetc(fp);
	        if (!feof(fp))
	           bh = fgetc(fp);
	        else
	           {
	           bl = 0;
	           bh = 0;
	           }
	        sum = sum + nxt;
	        nxt = (unsigned int)bh * 256U + (unsigned int)bl;
	     }
	     nxt &= 0xFF;
	     sum += nxt;
	     printf("sum = %X\n", sum);
	  }
	
	Additional query words: kbinf 3.x 4.0x 4.10 5.0x 5.10 5.13 5.1x LinkIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch
	Version           : :
	
	=============================================================================
	

{% endraw %}

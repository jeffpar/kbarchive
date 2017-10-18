---
layout: page
title: "Q74686: TBM12.COM Is Not Reported Properly by MEM /C"
permalink: kb/074/Q74686/
---

## Q74686: TBM12.COM Is Not Reported Properly by MEM /C

	Article: Q74686
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TBMI2.COM (a Novell-supplied file for the Microsoft MS-DOS 5 Upgrade) is
	identified with an incorrect name by the "MEM /C" command. The incorrect name is
	randomly generated. This error results from a problem with TBMI2.COM, not MS-DOS
	version 5.0.
	
	For more information on TBMI2.COM, please see the MS-DOS 5.0 README.TXT file,
	section "6.6 Novell Networks."
	
	MORE INFORMATION
	================
	
	The following is a sample output from MEM /C before loading TBMI2.COM:
	
	Conventional Memory :
	
	  Name                Size in Decimal       Size in Hex
	
	-------------      ---------------------   -------------
	  MSDOS              14592      ( 14.3K)       3900
	  HIMEM               1184      (  1.2K)        4A0
	  RAMDRIVE            1184      (  1.2K)        4A0
	  COMMAND             3392      (  3.3K)        D40
	  IPX                18800      ( 18.4K)       4970
	  NET5               42592      ( 41.6K)       A660
	  FREE                  64      (  0.1K)         40
	  FREE                 112      (  0.1K)         70
	  FREE                 128      (  0.1K)         80
	  FREE              573040      (559.6K)      8BE70
	
	Total  FREE :       573344      (559.9K)
	
	Total bytes available to programs :           573344   (559.9K)
	Largest executable program size :             573040   (559.6K)
	
	The following is sample output from MEM /C with the same configuration, after
	loading TBMI2.COM:
	
	  Name                Size in Decimal       Size in Hex
	-------------      ---------------------   -------------
	  MSDOS              14592      ( 14.3K)       3900
	  HIMEM               1184      (  1.2K)        4A0
	  RAMDRIVE            1184      (  1.2K)        4A0
	  COMMAND             3392      (  3.3K)        D40
	  IPX                18800      ( 18.4K)       4970
	  NET5               42592      ( 41.6K)       A660
	>> :\bin;c:           40848      ( 39.9K)       9F90
	
	  FREE                  64      (  0.1K)         40
	  FREE                 112      (  0.1K)         70
	  FREE                 128      (  0.1K)         80
	  FREE                 144      (  0.1K)         90
	  FREE              532016      (519.5K)      81E30
	
	Total  FREE :       532464      (520.0K)
	
	Total bytes available to programs :            532464   (520.0K)
	Largest executable program size :              532016   (519.5K)
	
	>> Indicates the incorrect entry for TBMI2.COM.
	
	(This name will change.)
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

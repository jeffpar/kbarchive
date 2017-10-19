---
layout: page
title: "Q105606: MS-DOS 6.2 DBLSPACE.INF File"
permalink: /kb/105/Q105606/
---

## Q105606: MS-DOS 6.2 DBLSPACE.INF File

	Article: Q105606
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a complete listing of the MS-DOS 6.2 DBLSPACE.INF file.
	
	MORE INFORMATION
	================
	
	  ; Microsoft DoubleSpace Setup Information File
	  ;
	  ; This file customizes the behavior of DoubleSpace when it is compressing
	  ; existing drives or creating new drives.
	
	  ;
	  ; Commands under [SpecialFiles] indicate actions to be taken for specific
	  ; files; the options are COPY=filename, IGNORE=filename, and
	  ; MOVE=filename. Without a path, any file of that name will match;
	  ; wildcards (?, *) are acceptable.
	  ;
	  ;   COPY=
	  ;     Specified file(s) are copied to compresed drive, and left behind on
	  ;     the uncompressed drive.
	  ;
	  ;   IGNORE=
	  ;     Specified file(s) are left behind on the uncompressed drive.
	  ;
	  ;   MOVE=
	  ;     Specified file(s) are moved to the compressed drive.  This is the
	  ;     default behavior for all files, except those with the SYSTEM
	  ;     attribute.
	  ;
	  [SpecialFiles]
	  ;
	  ;  The following two exceptions are for Microsoft Chart, French version:
	
	     MOVE=MC.COM
	     MOVE=MCA
	
	  ;
	  ;  The following two exceptions are for Microsoft Multiplan, French
	  ; version:
	  ;
	
	     MOVE=PLAN.COM
	     MOVE=MPA
	
	  ;
	  ;  The following two exceptions are for Microsoft Word, French version:
	  ;
	
	     MOVE=MW.COM
	     MOVE=MWA
	
	  ;
	  ;  The following exception is for Norton Anti-Virus:
	  ;
	
	     COPY=NAV_.SYS
	  ;
	  ;  The next two are for drivers required to access the hard disk, whose
	  ;  absence could cause data loss [rather than refused access]
	  ;  if they were not loaded during recovery from an unexpected reboot
	  ;  while compressing a drive.
	  ;
	     COPY=ASPI4DOS.SYS
	     COPY=USPI14.SYS
	
	  ;
	  ; Programs under [CopyFiles] are optional utilities that will be left on
	  ; the original boot drive if there is enough space.
	  ;
	  [CopyFiles]
	     MSD.EXE
	     MEM.EXE
	
	  ;
	  ; Programs under [dangerous] will be REM'ed out of config.sys during
	  ; DoubleSpace Setup, and will be restored when Setup is complete.
	  ;
	  [Dangerous]
	     PROTMAN
	     WORKGRP
	     UBNEI
	     UBXPS
	     ELNKII
	     INTERLNK
	     MC.SYS
	     FASTOPEN
	
	  ;
	  ; Programs under [prior] will have DEVICEHIGH=DBLSPACE.SYS placed -
	  ; before- them in config.sys.  This is done to avoid memory
	  ; incompatibilities. Note that it is okay to have multiple DBLSPACE.SYS
	  ; lines in config.sys; any redundant loads are ignored.
	  ;
	  [Prior]
	     PROTMAN
	
	  ;
	  ; [Fragments] accepts two lines:  Initial=#### and Addition=#### .
	  ; Initial is the number of fragments which will be allowed during SETUP
	  ; Addition is the number of fragments we allow, above that which is
	  ; currently in use, at all other times with DoubleSpace.
	  ;
	  [Fragments]
	     Initial=10000
	     Addition=110
	
	  [UncompressSpecial]
	   DONTCOPY=DBLSPACE.INI
	   DONTCOPY=DBLSPACE.BIN
	
	
	Additional query words: 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	

---
layout: page
title: "Q118949: PC WRmt: Files Placed on the Hard Drive During Installation"
permalink: kb/118/Q118949/
---

## Q118949: PC WRmt: Files Placed on the Hard Drive During Installation

	Article: Q118949
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of Microsoft Mail Remote for Windows requires that certain files are
	available on the local hard disk. The SETUP.EXE program places these files on
	the hard disk during installation. If these files are deleted or overwritten
	with different versions of the same files provided with other products, then
	Mail Remote for Windows may fail to function properly.
	
	MORE INFORMATION
	================
	
	The information that follows provides a complete list of files that are written
	to the local hard disk during installation of Mail Remote for Windows.
	
	NOTE: The file list indicates the installed files and their location when
	performing an Express installation. The file list does not include the user
	account information and address list files specific to a user or postoffice and
	installed by the Data-Disk. The file list also reflects the installation of a
	single Mail client.
	
	Directory of C:\MSMAIL
	
	IMPEXP   DLL        66,560 04-06-93  12:00a
	CONVERT  EXE        25,952 04-06-93  12:00a
	FAXVIEW  EXE       101,376 04-06-93  12:00a
	MAILDRV  EXE        23,840 04-06-93  12:00a
	MSMAIL   EXE       299,904 04-06-93  12:00a
	ATTMAIL  HLP       145,553 04-06-93  12:00a
	FAXVIEW  HLP        38,432 04-06-93  12:00a
	MAILDRV  HLP        14,980 04-06-93  12:00a
	MSMAIL   HLP       257,054 04-06-93  12:00a
	MSRMT    HLP        95,717 04-06-93  12:00a
	RMTPSS   HLP        25,963 04-06-93  12:00a
	WINHELP  HLP        26,960 04-06-93  12:00a
	README   TXT        19,257 04-06-93  12:00a
	
	Directory of C:\WINDOWS
	
	MSMAIL   INI
	MSMAILPV INI
	SCHDPLUS INI
	
	Directory of C:\WINDOWS\SYSTEM
	
	AB       DLL        97,600 04-06-93  12:00a
	DEMILAYR DLL        48,304 04-06-93  12:00a
	FRAMEWRK DLL       221,168 04-06-93  12:00a
	MAILMGR  DLL        51,632 04-06-93  12:00a
	MAPI     DLL        53,536 04-06-93  12:00a
	MSRMT    DLL       232,512 04-06-93  12:00a
	MSRMTCN  DLL        23,776 04-06-93  12:00a
	MSRMTSU  DLL        34,816 04-06-93  12:00a
	MSRMTTR  DLL        76,624 04-06-93  12:00a
	MSRMTUI  DLL       164,464 04-06-93  12:00a
	PABNSP   DLL        44,640 04-06-93  12:00a
	SCHEDMSG DLL        75,936 04-06-93  12:00a
	SENDFILE DLL         6,080 04-06-93  12:00a
	STORE    DLL       229,568 04-06-93  12:00a
	TRNOFF   DLL         4,256 04-06-93  12:00a
	UNIDRV   DLL       128,240 04-06-93  12:00a
	VFORMS   DLL       142,960 04-06-93  12:00a
	MSFAX    DRV        29,712 04-06-93  12:00a
	MAILSPL  EXE        47,120 04-06-93  12:00a
	MSMAIL3  FON         7,680 04-06-93  12:00a
	
	Directory of C:\WINDOWS\MSAPPS\PROOF
	
	MSSPELL  DLL        76,800 04-06-93  12:00a
	MSSP_AM  LEX       176,839 04-06-93  12:00a
	
	Directory of C:\WINDOWS\MSMAIL\ATT
	
	MODEMS   DAT        50,554 04-06-93  12:00a
	ATT      DCT        24,244 04-06-93  12:00a
	MODEM    DCT         2,522 04-06-93  12:00a
	ATTLIST  DLL        18,240 04-06-93  12:00a
	ATTMAIL  DLL       215,664 04-06-93  12:00a
	BCC      DLL        10,688 04-06-93  12:00a
	TRNOFF   DLL         4,256 04-06-93  12:00a
	MAILTERM EXE       597,952 04-06-93  12:00a
	MAILTERM HLP        44,763 04-06-93  12:00a
	FILES    INI           212 04-06-93  12:00a
	MSMAIL   INI         2,568 04-06-93  12:00a
	SCHDPLUS INI           109 04-06-93  12:00a
	ATT      TRM         4,096 04-06-93  12:00a
	
	Directory of C:\WINDOWS\MSMAIL\MSRMT
	
	FILES    INI           175 04-06-93  12:00a
	MSMAIL   INI         1,326 04-06-93  12:00a
	SCHDPLUS INI           109 04-06-93  12:00a
	
	Directory of C:\WINDOWS\MSMAIL\MSRMT\GLB
	
	DEFAULT  SCR         2,144 04-06-93  12:00a
	FRANJA96 SCR         2,405 04-06-93  12:00a
	FRCAMP24 SCR         2,045 04-06-93  12:00a
	FRCMPQ24 SCR         1,739 04-06-93  12:00a
	FRCRHST  SCR         4,501 04-06-93  12:00a
	FRCRV32B SCR         4,499 04-06-93  12:00a
	FRKRTX12 SCR         2,044 04-06-93  12:00a
	FRKRTX24 SCR         2,044 04-06-93  12:00a
	FRPNBA24 SCR         2,044 04-06-93  12:00a
	FRPNBN24 SCR         2,044 04-06-93  12:00a
	FRPNBP24 SCR         2,044 04-06-93  12:00a
	FRQUAT24 SCR         1,862 04-06-93  12:00a
	FRWPV22B SCR         3,040 04-06-93  12:00a
	FRWPV32  SCR         3,784 04-06-93  12:00a
	GEALF24  SCR         2,044 04-06-93  12:00a
	GEALFM24 SCR         2,044 04-06-93  12:00a
	GEDIGM24 SCR         1,944 04-06-93  12:00a
	GEDIGP24 SCR         2,044 04-06-93  12:00a
	GEDILG24 SCR         2,044 04-06-93  12:00a
	GEDLGM24 SCR         1,944 04-06-93  12:00a
	GEDLGP24 SCR         1,944 04-06-93  12:00a
	GEFURY24 SCR         2,047 04-06-93  12:00a
	GEMCLK24 SCR         1,943 04-06-93  12:00a
	GEML9624 SCR         1,944 04-06-93  12:00a
	GESHIN24 SCR         1,948 04-06-93  12:00a
	GETOSH24 SCR         1,862 04-06-93  12:00a
	NULLMODM SCR           667 04-06-93  12:00a
	SWDICM96 SCR         3,777 04-06-93  12:00a
	SWMCDX96 SCR         3,162 04-06-93  12:00a
	SWMTMM96 SCR         3,191 04-06-93  12:00a
	SWUSRHST SCR         3,402 04-06-93  12:00a
	UKBTNS96 SCR         2,685 04-06-93  12:00a
	UKHAYS24 SCR         2,112 04-06-93  12:00a
	UKMAZQAT SCR         2,387 04-06-93  12:00a
	UKMRCMCR SCR         4,828 04-06-93  12:00a
	UKQUAT24 SCR         2,104 04-06-93  12:00a
	UKULTRAV SCR         7,379 04-06-93  12:00a
	USGNERIC SCR         2,044 04-06-93  12:00a
	USHAYS12 SCR         1,927 04-06-93  12:00a
	USHAYS24 SCR         1,972 04-06-93  12:00a
	USIBM524 SCR         2,888 04-06-93  12:00a
	USMLTC96 SCR         3,060 04-06-93  12:00a
	USMRCM96 SCR         2,600 04-06-93  12:00a
	USMTRL24 SCR         1,972 04-06-93  12:00a
	USMTRL96 SCR         3,838 04-06-93  12:00a
	USOPTM24 SCR         1,972 04-06-93  12:00a
	USOPTM96 SCR         2,803 04-06-93  12:00a
	USPPER24 SCR         1,838 04-06-93  12:00a
	USPPER96 SCR         2,404 04-06-93  12:00a
	USTLBT96 SCR         2,489 04-06-93  12:00a
	USULTR96 SCR         2,810 04-06-93  12:00a
	USUSRHST SCR         3,787 04-06-93  12:00a
	USVS4296 SCR         2,803 04-06-93  12:00a
	USVSER96 SCR         2,640 04-06-93  12:00a
	
	Additional query words: 3.20 setup install
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

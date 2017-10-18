---
layout: page
title: "Q123499: PCMDUMP and Package Command Manager Instruction Files"
permalink: kb/123/Q123499/
---

## Q123499: PCMDUMP and Package Command Manager Instruction Files

	Article: Q123499
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbtool kbAudit kbPCM smshowto smsaudit smspcm
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the PCMDMP utility, explains the output
	generated, and shows how to interpret the information within the Systems
	Management Server system.
	
	MORE INFORMATION
	================
	
	When the client's Package Command Manager (PCM) polls a logon server during its
	designated interval, it will look in the \\<logon
	server>\SMS_SHR\PCMINS.BOX directory for a file name that has the same SMS ID
	as itself. When the file is located, PCM will then parse this file and determine
	what actions need to be taken, if any.
	
	PCMDUMP displays binary PCM instruction files in text format for review. These
	files reside in the \SMS\LOGON.SRV\PCMINS.BOX directories, named with the unique
	SMS ID of the destination system, appended with a .INS extension.
	
	Some package installation problems can be resolved by examining the contents of
	the clients PCM instruction file. The instruction file can contain multiple
	records, one for each package to install. Below is a description of the record
	structure:
	
	SiteID:             Three character SMS site code.
	RequestID:          A unique package distribution ID.
	PackageID:          Identifies actual package to distribute.
	JobID:              ID of job used to distribute this package.
	Install Flag:       0-1   Install regardless of network speed.
	                   2     Do not install over a slow network link.
	Install By Date:    Package will become mandatory after this date and time.
	Install By Full:    0   Optional Install.
	                   1   Mandatory Install.
	Display Date:       Make available for installation after this date.
	Display Full:       Display this package in PCM.
	Expiration Date:    Package expires after this date.
	Expiration Full:    0   Never expires.
	                   1   Expires after expiration date.
	User Input Flags:   0   Doesn't require user input.
	                   1   Require user input.
	Operating System:   Bit mask of which operating system to install on.
	                   Supported operating systems and bit masks:
	                      WIN16         0x00000001
	                      WIN32_X86     0x00000002
	                      WIN32_MIPS    0x00000004
	                      WIN32_ALPHA   0x00000008
	                      DOS5          0x00000010
	                      DOS6          0x00000020
	                      MACINTOSH     0x00000040
	Disk Usage:         Not used.
	Run Command:        Command line to be run.
	WCL Name:           Descriptive text, displayed in PCM under Command Name.
	Server(s):          The full universal naming convention (UNC) path to
	                   available package directories, and server types. Server
	                   types:
	                      UNKNOWN    1
	                      WINNT3     2
	                      LANMAN1    3
	                      LANMAN2    4
	                      NETWARE2   5
	                      NETWARE3   6
	                      NETWARE4   7
	Package Name:       Name of package.
	Comments:           Text comments that are included with the package.
	Domain Name:        Not used.
	Reserved:           Internal information used by SMS.
	
	Below is an example of PCMDUMP output. Note that there are two extra items at the
	top of the PCMDUMP output that are not part of the normal record structure. The
	first item, reported only once, is the filename that PCMDUMP is parsing. The
	second item, repeated for every record, is the version of the record. "Beta 455"
	translates to "version 6" which is the correct version for SMS 1.0.
	
	  D:\SMS\LOGON.SRV\PCMINS.BOX>PCMDUMP MDM00005.INS
	
	  PCM Instruction File Dump Utility v1.0
	  Copyright 1993, 1994 Microsoft Corporation
	
	  File Name       : mdm00005.ins
	  PCM Version     : Beta 455
	  SiteID          : BPC
	  RequestID       : BPC001M
	  PackageID       : BPC0000A
	  JobID           : BPC000AA
	  Install Flag    : 0
	  Install By Date : 00/00/00 00:00:00
	  Install By Full : 0
	  Display Date    : 09/21/94 17:56:00
	  Display Full    : 1
	  Expiration Date : 03/07/95 17:56:00
	  Expiration Full : 1
	  User Input Flags: 0
	  Operating System: 15
	  Disk Usage      :
	  Run Command     : acmewkst.exe smsproxy\complete.stf /I:C
	  WCL Name        : Complete
	  Server(s)       : \\CNS-SMS\SMS_PKGD\BPC0000A\ Type: 2
	                    Zone: \\CNS-SMS\SMS_PKGD\BPC0000A\ 
	                  : \\CNSAPPS1\SMS_PKGD\BPC0000A\ Type: 2
	  Package Name    : Microsoft Office Professional 4
	  Comments        : Microsoft Office Professional 4.3
	  Domain Name     :
	  Reserved        : 00 E6 F8 77 60 82 F9 77 FF FF FF FF 94 FF 03 00 FE 5F
	                    40 00 00 00 05 00 08 00 00 00 0F 00 00 00
	  PCM Version     : Beta 455
	  SiteID          : BPC
	  RequestID       : GBL00B9
	  PackageID       : GBL00015
	  JobID           : GBL0015B
	  Install Flag    : 0
	  Install By Date : 00/00/00 00:00:00
	  Install By Full : 0
	  Display Date    : 09/24/94 07:00:00
	  Display Full    : 1
	  Expiration Date : 11/31/94 07:00:00
	  Expiration Full : 1
	  User Input Flags: 0
	  Operating System: 51
	  Disk Usage      :
	  Run Command     : audit.bat
	  WCL Name        : Find Microsoft Software
	  Server(s)       : \\CNS-SMS\SMS_PKGD\GBL00015\ Type: 2
	                    Zone: \\CNS-SMS\SMS_PKGD\GBL00015\ 
	                  : \\CNSAPPS1\SMS_PKGD\GBL00015\ Type: 2
	  Package Name    : MS Software Audit (16 Packages)
	  Comments        : This package will search your hard disk drives looking
	                    for Microsoft software. It will report only which
	                    Microsoft programs you have installed on this
	                    computer. This will be used to offer you software
	                    upgrades as they become available.
	  Domain Name     :
	  Reserved        : 00 E6 F8 77 60 82 F9 77 FF FF FF FF 94 FF 03 00 FE 5F
	                    40 00 00 00 05 00 08 00 00 00 0F 00 00 00
	  PCM Version     : Beta 455
	  SiteID          : BPC
	  RequestID       : BPC003F
	  PackageID       : BPC00010
	  JobID           : BPC00112
	  Install Flag    : 0
	  Install By Date : 00/00/00 00:00:00
	  Install By Full : 0
	  Display Date    : 09/25/94 13:14:00
	  Display Full    : 1
	  Expiration Date : 03/11/95 13:14:00
	  Expiration Full : 1
	  User Input Flags: 1
	  Operating System: 64
	  Disk Usage      :
	  Run Command     : "Flight Simulator Program"
	  WCL Name        : Install Flight Simulator on your system
	  Server(s)       : \\CNS-SMS\SMS_PKGD\BPC00010\ Type: 2
	                    Zone: \\CNS-SMS\SMS_PKGD\BPC00010\ 
	                  : \\CNSAPPS1\SMS_PKGD\BPC00010\ Type: 2
	  Package Name    : MS Flight Simulator
	  Comments        : This is for Macintosh Only
	  Domain Name     :
	  Reserved        : 00 E6 F8 77 60 82 F9 77 FF FF FF FF 94 FF 03 00 FE 5F
	                    40 00 00 00 05 00 08 00 00 00 0F 00 00 00
	  PCM Version     : Beta 455
	  SiteID          : BPC
	  RequestID       : BPC005Q
	  PackageID       : BPC00012
	  JobID           : BPC001F9
	  Install Flag    : 0
	  Install By Date : 11/01/94 23:59:00
	  Install By Full : 1
	  Display Date    : 09/27/94 18:37:00
	  Display Full    : 1
	  Expiration Date : 03/13/95 18:37:00
	  Expiration Full : 1
	  User Input Flags: 0
	  Operating System: 1
	  Disk Usage      :
	  Run Command     : patch.exe
	  WCL Name        : Patch of NW Redirector
	  Server(s)       : \\CNS-SMS\SMS_PKGD\BPC00012\ Type: 2
	                    Zone: \\CNS-SMS\SMS_PKGD\BPC00012\ 
	                  : \\CNSAPPS1\SMS_PKGD\BPC00012\ Type: 2
	  Package Name    : WFW VREDIR.386 Patch
	  Comments        : Patch Utility for new WFW Redirector
	  Domain Name     :
	  Reserved        : 00 E6 F8 77 60 82 F9 77 FF FF FF FF 94 FF 03 00 FE 5F
	                    40 00 00 00 05 00 08 00 00 00 0F 00 00 00
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbtool kbAudit kbPCM smshowto smsaudit smspcm 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

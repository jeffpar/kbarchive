---
layout: page
title: "Q146399: XGEN: README.TXT: Microsoft Exchange 4.0 U.S. Service Pack 1"
permalink: /kb/146/Q146399/
---

## Q146399: XGEN: README.TXT: Microsoft Exchange 4.0 U.S. Service Pack 1

	Article: Q146399
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Following is the README.TXT file that accompanies the Microsoft Exchange Server
	version 4.0 U.S. Service Pack 1:
	
	MORE INFORMATION
	================
	
	---------------------------------------------------------------------------
	                  Microsoft Exchange Server Version 4.0
	                             Service Pack 1
	---------------------------------------------------------------------------
	
	Contents
	--------
	
	1.0  Introduction
	2.0  Installation Instructions for the Microsoft Exchange Server Service
	    Pack 1
	2.1  User Notes
	3.0  List of Bugs Fixed in Microsoft Exchange Server Service Pack 1
	
	1.0  Introduction
	-----------------
	
	This release of Microsoft(R) Exchange Server 4.0 Service Pack 1 is easy to
	apply from within Microsoft Windows NT(R) and changes only those files that
	were originally set up on the Microsoft Exchange Server system. Service
	Pack releases are cumulative. They contain all previous fixes and any new
	fixes made to the system.
	
	2.0  Installation Instructions for the
	Microsoft Exchange Server Service Pack 1
	----------------------------------------
	
	To install the Service Pack from compressed files:
	
	1.  Create two subdirectories, SETUP and SUPPORT.
	2.  Download the compressed setup file appropriate for your hardware
	   platform into the SETUP directory.
	   Select the appropriate file as indicated by the following list:
	      Alpha AXP(TM):  SP1_400A.EXE
	      Intel(R):       SP1_400I.EXE
	      MIPS(R):        SP1_400M.EXE
	      PowerPC(TM):    SP1_400P.EXE
	3.  Download the compressed support file appropriate for your hardware
	   platform into the SUPPORT directory.
	   Select the appropriate file as indicated by the following list:
	      Alpha AXP(TM):  SP1S400A.EXE
	      Intel(R):       SP1S400I.EXE
	      MIPS(R):        SP1S400M.EXE
	      PowerPC(TM):    SP1S400P.EXE
	4.  At the Windows NT command prompt, go to the SETUP directory and type
	   the filename (downloaded in Step 2) followed by a -d to ensure that the
	   correct directories are created (Example: SP1_400A -d).
	5.  At the Windows NT command prompt, go to the SUPPORT directory and type
	   the filename (downloaded in Step 3) followed by a -d to ensure that the
	   correct directories are created (Example: SP1S400A -d).
	6.  Go to the SETUP directory, and type UPDATE. Follow the instructions
	   displayed on the screen.
	
	2.1  User Notes
	---------------
	
	*** Migrating Shared Folders from Microsoft Mail (PC) or Lotus(R) cc:
	Mail(TM)
	
	This Service Pack contains an updated Migration Wizard that allows you to
	select the default owner of the shared folders you are migrating. If you
	used the Migration Wizard that shipped on the Microsoft Exchange Server 4.0
	compact disc, run the FLDROWNR.EXE utility that is included. Follow the
	instructions in the Microsoft Knowledge Base article Q142262.
	
	*** Installing Symbol Files from the SUPPORT directory
	
	To install the symbol files corresponding to the new binaries in Service
	Pack 1, type:
	
	    XCOPY /S /U /D D:\SUPPORT\SYMBOLS\ C:\WINNT35\SYMBOLS
	
	Note: This assumes that the drive where you uncompressed the support file
	is D and your symbol files are located in the C:\WINNT35\SYMBOLS directory.
	
	The XCOPY command copies the Service Pack 1 .DBG files over the existing
	versions of these files. It copies only those .DBG files that are already
	installed (/U switch) and only those with a more recent time stamp (/D
	switch).
	
	*** Microsoft Exchange Server Power PC (PPC) Beta Users
	
	Install Microsoft Exchange Server Service Pack 1 if you will be running the
	Schedule+ Free/Busy Gateway on your PowerPC Microsoft Exchange Server.
	
	3.0  List of Bugs Fixed in Microsoft Exchange Server Service Pack 1
	-------------------------------------------------------------------
	
	Note: Use the Qxxxxxx number that precedes the title of the bug fix to
	query the Microsoft Knowledge Base for an article about that bug.
	
	Service Pack 1
	--------------
	
	  Q126497: Limiting the Number of Recipients of a Message
	  Q135459: Event Error 251: Fatal Internal MTA Error Occurred
	  Q136786: IMC Sends NDR and OOF Messages to Bulk Mailing Lists
	  Q136807: MTA Error: Too Many ECBs Processed in One Thread
	  Q137699: Cannot Send X.400 Delivery Reports Through French ADMD
	  Q139643: Error Writing Log Information to SA
	  Q139858: Initial Directory Replication Too Long
	  Q140338: Directory Crashes with Dr. Watson in DETAILS.C
	  Q140448: Errors Processing Incoming Replication Messages
	  Q140974: MTA NDR's Mail with FTBP Attachments from HP Openmail
	  Q140975: Event ID 4037. An Exception has Occurred...
	  Q140976: Unable to Start the Association Due to Resource Shortage
	  Q141135: MSExchangeMSMI NDR Error EventID 2568
	  Q141970: AT MTA Will Over Utilize CPU When Processing Message Subject
	           Containing 0xD
	  Q142257: MTA ERROR: MTA Database XFER-IN Thread
	  Q142258: MTA Exception Error on Service Shutdown
	  Q142260: IMC Sends Messages in Rich Text Erroneously
	  Q142261: IMC Restest Utility Debug Option
	  Q142262: Display of Public Folder Summary causes Access Violation
	  Q142266: Cannot Create PC Mail <NET/PO> Style SMTP Proxies via DirSync
	  Q142916: MTA Stops Making Associations and Generatea a 2171 Error
	  Q143186: MTA PerfMon Instances limited to 53 Instances
	  Q143197: IMC Generating Pending Delivery Notification on Queued Read
	           Receipts
	  Q143236: Unable to Change Password via Client
	  Q146473: Attachment with Name of Charset=ISO-2022-JP
	  Q146509: MTA May Stop with Site Connector Removed
	  Q146537: DSA Queues Too Many Initial Synchronizes at Startup
	  Q146567: IMC Leaves Messages with Addresses > 255 Characters in MTS-OUT
	  Q146598: Messages are Stuck in MTS-OUT
	  Q147459: IMC Does Not Use the Resent-From Field
	  Q147521: MTA Crashes with a Large Recipient List
	  Q147821: Installing Server into Large Existing Site is Slow
	  Q149579: MTA Error: Database Object Not in Use
	
	Additional query words: servpack SP1 bug fix qfe compact disc
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

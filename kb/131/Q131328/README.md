---
layout: page
title: "Q131328: PC WFW: Files Are Not Interchangeable with Mail for Windows"
permalink: /kb/131/Q131328/
---

## Q131328: PC WFW: Files Are Not Interchangeable with Mail for Windows

{% raw %}

	Article: Q131328
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use version 3.2 of Microsoft Mail for Windows on a computer that is
	running Microsoft Windows for Workgroups version 3.11, you may see some
	variation on the following errors:
	
	  unexpected memory or network error
	
	  call to undefined dynalink
	
	  user has not logged into the net
	
	  general protection fault
	
	Other errors may be the result of having files from Windows for Workgroups (WFW)
	Mail and 3.2x of Mail for Windows installed on the same workstation. The files
	between these two clients are not interchangeable and provide different
	features.
	
	MORE INFORMATION
	================
	
	When you attempt to resolve the previously mentioned error messages, the
	following issues should be addressed regarding the mixing of the different file
	versions.
	
	Updates made to the Mail 3.2x files are not made to the corresponding WFW files.
	For example, an update to MSSFS.DLL for 3.2x corrected a problem that caused the
	Global Address List (GAL) to remain locked, resulting in a failed Rebuild.
	Currently, there is no way to correct this problem with WFW Mail.
	
	If you installed the corrected 3.2x file into WFW, it will corrupt the At Work
	FAX, remove the ability of WFW Mail to remember the user's password, and cause
	the errors listed above. Under no circumstances should WFW files be replaced
	with any of Mail 3.2x files. The only way you can use the updated Mail 3.2x
	files is to completely uninstalled WFW Mail and replace it with a complete
	installation of the 3.2x client.
	
	Due to a version conflict, many of the WFW files will not be replaced when the
	3.2 or 3.2a client is installed. Many of the files are installed, even if you
	choose not to install Mail when you installed WFW. As a result, you may have the
	above problems with mixed versions of the files. When any of the above errors
	occur, as a first troubleshooting step, you should check the WFW files.
	
	Recently, a SETUP.INF file has been released that is designed to allow the 3.2a
	client to install over the WFW client. For additional information, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q124953 SETUP.INF for Windows for Workgroups 3.11
	
	While this SETUP.INF file generally works, the following problems still remain:
	
	1. MSMAIL.HLP will not be upgraded to the 3.2a version.
	
	2. The Postoffice Manager menu option will not be removed from the machine on
	  which it is installed.
	
	3. WGPOMGR.DLL, CMC.DLL, and 26 At Work FAX files will be "orphaned" on the your
	  hard drive.
	
	4. FAXVIEW.EXE, IMPEXP.DLL, SCHEDMSG.DLL, FAXVIEW.HLP, and SENDFILE.DLL will not
	  be updated to the 3.2x version.
	
	  NOTE: These files do not contain the version number problem, so they can be
	  overwritten by a fix, if one should become available.
	
	5. MSSFS.DLL, MSMAIL.EXE, CONVERT.EXE, VFORMS.DLL, AB.DLL, MAILMGR.DLL,
	  MAILSPL.EXE, MAPI.DLL, PABNSP.DLL, and STORE.DLL will be updated to the 3.2a
	  version, but they will have an incorrect date. The files will be dated as
	  7/22/94; they should be dated 8/17/94.
	
	6. If the customer does not follow the instructions in the article closely and
	  turn off At Work FAX prior to running the 3.2a setup, there will be stranded
	  lines in the MSMAIL.INI that may cause errors to occur.
	
	This issue is generally referred to as "mixed DLLs". Below is a list of the DLLs
	and EXE that can be a WFW version or a Mail 3.2x version:
	
	  MSMAIL.EXE
	  MSSFS.DLL
	  FRAMEWRK.DLL
	  STORE.DLL
	  VFORMS.DLL
	  DEMILAYR.DLL
	  MAILMGR.DLL
	
	Additional query words: 3.20 mixed dll
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}

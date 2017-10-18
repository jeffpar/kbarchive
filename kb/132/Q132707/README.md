---
layout: page
title: "Q132707: Customized Setting For Access Reverts Back to Original"
permalink: kb/132/Q132707/
---

## Q132707: Customized Setting For Access Reverts Back to Original

	Article: Q132707
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbPGC smspgc
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you distribute a package with Systems Management Server containing
	Microsoft Access 2.0, customize the toolbar settings, and exit and restart
	Access, the customized toolbar settings are not available. PGC resets the Access
	toolbar settings every time Access runs.
	
	CAUSE
	=====
	
	This problem occurs if the SystemDB entry in MSACC20.INI points to the
	SYSTEM.MDA file on the distribution server. Even after you manually change the
	entry to point to the local SYSTEM.MDA file (which contains the customized
	toolbar settings), the entry is changed automatically to point to the SYSTEM.MDA
	file on the distribution server when you run Access.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Modify the SMSSHARE.STF file in the SMSPROXY subdirectory of the Microsoft
	  Access package directory on the Systems Management Server (distribution
	  server). Change:
	
	     %s\system.mda                  (line 88)
	     %s\workdir\system.mda          (line 89)
	     %s\system.mda                  (line 761)
	
	  to:
	
	     %1\system.mda                  (for all three lines)
	
	2. In the MSACC20.INI file, change the SystemDB entry to:
	
	     [Options]
	     SystemDB=<local drive>:\ACCESS\SYSTEM.MDA
	
	3. Do one of the following, depending on the network operating system your
	  client computer is using:
	
	  Windows NT Client
	  -----------------
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  a. Run Registry Editor (REGEDT32.EXE).
	
	  b. From the HKEY_CLASSES_ROOT subtree, go to the following subkey:
	
	        \SMS\Applications\msaccess\DAEE\Profile0
	
	  c. Remove the [Options][SystemDB] entry.
	
	     NOTE: A Microsoft Test script, distributed as a PCM job, can remove the
	     Registry entry each time Microsoft Access runs.
	
	  d. Quit Registry Editor.
	
	  Windows for Workgroups 3.11 Client
	  ----------------------------------
	
	  a. Run the Registration Info Editor (REGEDIT.EXE) with the following
	     command:
	
	        REGEDIT /V
	
	  b. Go to the following subkey:
	
	        \SMS\Applications\msaccess\DAEE\Profile0
	
	  c. Remove the [Options][SystemDB] entry.
	
	  d. Quit REGEDIT.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms wfw wfwg
	
	======================================================================
	Keywords          : kbnetwork kbPGC smspgc 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	

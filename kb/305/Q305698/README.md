---
layout: page
title: "Q305698: SMSINST: Install File Script Item May Cause Compile to Hang"
permalink: /kb/305/Q305698/
---

## Q305698: SMSINST: Install File Script Item May Cause Compile to Hang

{% raw %}

	Article: Q305698
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsms200 kbsms200bug smsinst
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The System Management Server (SMS) Installer may stop responding (hang) during
	compilation of an installation script when that script contains an install file
	script item that uses wildcard (*.*) files for the source and specifies the
	"Include sub-directories" option on a folder structure that has more than 16
	levels.
	
	Additionally, if you cancel the compilation, the SMS Installer may stop and
	generate an access violation error message.
	
	CAUSE
	=====
	
	This problem occurs because the SMS Installer is limited to 16 sub-folders when
	you specify wildcard source paths and select the "Include sub-directories"
	option for the install file script item.
	
	WORKAROUND
	==========
	
	To work around this problem, break the install file script items into multiple
	install file script items that specify sub-folders below the original folder.
	This ensures that they include no more than 16 levels of folder structures.
	
	For example, a script may not compile because the folder depth is 17 folders and
	the Install Files script item is for c:\Myapp\DLL\*.*, include sub-folders. View
	the sub-folders under C:\Myapp\Dll. There are eight sub-folders, one that goes
	16 levels deep. To work around this problem:
	
	- Create a single Install File script item for C:\Myapp\Dll\*.*, but do not
	  choose the Include sub-folders option. This is to get all of the files that
	  are at the root of C:\Myapp\Dll, but not the sub-folders.
	
	- Create eight Install File script items for each of the eight sub-folders
	  under C:\Myapp\Dll, and specify *.* and the "Include sub-directories" option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 2.0.
	
	MORE INFORMATION
	================
	
	The compile process hangs when processing Install file script item for a 16
	level deep directory tree structure using wildcards and include sub-directory
	options.
	
	Steps to Reproduce the Problem
	------------------------------
	
	To reproduce the problem, use the following steps:
	
	1. Install latest SMS Installer build.
	
	2. Create a folder called C:\Test.
	
	3. Create 16 sub-folders under this folder. For example,
	  C:\Test\A\B\C\D\E\F\G\H\I\J\K\L\M\N\O\P.
	
	4. Create a file in the \P (lowest) folder.
	
	5. Open Installer and start in Script Editor view with no items. Add the
	  following script items to the script:
	
	  item: Set Variable
	    Variable=MAINDIR
	    Value=C:\TESTDEST
	  end
	  item: Install File
	    Source=C:\Test\*.*
	    Destination=%MAINDIR%
	    Flags=0000000100000010
	  end
	
	  Note that wildcards are used for source, and the include subdirs flag is
	  selected.
	
	Note that steps 6 through 9 are not vital to reproduce the problem; however, they
	are necessary to for this simple test script to compile.
	6. In Script Editor view, click the Cancel event in the Event box (Mainline,
	  Exit, Cancel).
	
	7. Delete the Include Uninstal.ipf script item in the "Cancel event script"
	  section.
	
	8. Switch back to the Mainline event.
	
	9. Click Edit, click Installation Properties, click the Screen tab, and then
	  change the "Progress Bar Based on" setting to Position in the Installation
	  script.
	
	10. Compile the script.
	
	RESULT: The SMS Installer hangs during the compile; the progress dialog box hangs
	and there is no activity.
	
	
	11. Click Cancel, and then click OK when you are prompted to confirm.
	
	RESULT: An error message occurs in the SMS Installer.
	
	
	Additional query words: prodsms directory subdirectory
	
	======================================================================
	Keywords          : kberrmsg kbsms200 kbsms200bug smsinst 
	Technology        : kbSMSSearch kbSMSI200
	Version           : :2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

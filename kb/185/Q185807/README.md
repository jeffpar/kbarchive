---
layout: page
title: "Q185807: SMS: &quot;Unable to Load Resource DLL&quot; Starting Database Mgr Tool"
permalink: /kb/185/Q185807/
---

## Q185807: SMS: &quot;Unable to Load Resource DLL&quot; Starting Database Mgr Tool

{% raw %}

	Article: Q185807
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 03-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Systems Management Server Database Manager tool on a computer
	with Systems Management Server Administrative Tools installed, you may receive
	the following error message:
	
	  Unable to load resource DLL _dbclean.dll
	
	After you accept the error message by clicking OK, an access violation occurs in
	Dbclean.exe and the application terminates.
	
	In a similar manner, if you try to start Systems Management Server MIF Form
	Generator on the same computer, you receive the following error message:
	
	  Could not load language DLL _MIFGEN.DLL
	
	After you accept that error message, a second dialog appears saying "Failed to
	create empty document" and the application terminates.
	
	You may also note that these two issues do not appear on the Systems Management
	Server site server itself.
	
	CAUSE
	=====
	
	When the Systems Management Server Administration tools are installed on a
	computer running Windows NT that is not configured for the U.S. English system
	default locale, the Systems Management Server Database Manager and the Systems
	Management Server MIF Form Generator attempt to load its files from the
	incorrect language resource directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	To work around this problem, create a locale directory parallel to the existing
	00000409 (U.S. English locale) directory that corresponds to your system default
	locale language code, where the resource DLLs and help files are located.
	Copying all the files from the existing 00000409 directory to the new directory
	will correct this problem.
	
	All files in the Site.srv\<Platform>.bin\00000409 directory (where
	<Platform> is the platform you are using, such as x86, ALPHA, or MIPS) can
	be copied to a newly created locale directory that can be created parallel to
	the 00000409 U.S. English locale directory.
	
	For example, the U.K. English locale is 00000809. By creating the
	Site.Srv\Platform.bin\00000809 directory, and then copying all the files from
	the U.S. locale directory to the newly created directory, the Systems Management
	Server resources and help files can be loaded successfully.
	
	Additional query words: 1.20 prodsms trap dr watson gpf drwtsn32 av
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

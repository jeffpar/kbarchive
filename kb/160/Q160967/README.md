---
layout: page
title: "Q160967: SMS: Components Fail to Load Language DLLs and Help Files"
permalink: /kb/160/Q160967/
---

## Q160967: SMS: Components Fail to Load Language DLLs and Help Files

{% raw %}

	Article: Q160967
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbusage kbsmsAdmin kbsmsUtil smsadmin smsutilkbfixlist
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When trying to load certain Systems Management Server components or their help
	files, the application or help file fails to load because the application cannot
	find the required file.
	
	Any of the following may occur:
	
	- When you select the Help option from the Systems Management Server Event Trap
	  Translator utility, the following error message appears:
	
	  Cannot find file: 00000xxx\EVENTRAP.HLP"
	
	  Where xxx is your current non-U.S. locale.
	
	
	- When you select the Help option from the Systems Management Server Service
	  Manager, the following error message appears:
	
	  Can't open help file: 00000xxx\SMS.HLP"
	
	  Where xxx is your current non-U.S. locale.
	
	
	- When you try to run the Systems Management Server MIF Form Generator (MIFGEN)
	  you receive an error message stating that Mifgen.exe cannot locate its
	  resource DLL file, _Mifgen.dll.
	
	
	CAUSE
	=====
	
	When the Systems Management Server Administration tools are installed on a
	computer running Windows NT that is not configured for U.S. English, the
	components outlined above attempt to load files from the incorrect language
	resource directory.
	
	WORKAROUND
	==========
	
	To work around this problem, you can create a locale directory parallel to the
	existing 00000409 (US English locale) directory, where the resource DLLs and
	Help files are located. Copying all existing files from the existing 00000409
	directory to the new directory will correct all problems noted above.
	
	All files in the Site.srv\Platform.bin\00000409 directory (where platform is the
	platform you are using, such as x86, ALPHA, or MIPS) can be copied to a
	newly-created locale directory that may be created parallel to the 00000409 U.S.
	English locale directory.
	
	For example, the UK English locale is 00000809. By creating the directory
	Site.Srv\Platform.bin\00000809, and then copying all the files from the U.S.
	locale directory to the newly-created directory, the Systems Management Server
	resources and Help files can be loaded successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem was corrected in the latest Microsoft
	Systems Management Server version 1.2 U.S. Service Pack. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms event trap resource dll mifgen help smsvcmgr
	
	======================================================================
	Keywords          : kbnetwork kbtool kbusage kbsmsAdmin kbsmsUtil smsadmin smsutil kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

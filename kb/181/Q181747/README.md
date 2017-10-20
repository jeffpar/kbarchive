---
layout: page
title: "Q181747: SMSINST: Configuration Registry List Box Displays Only 1024 Keys"
permalink: /kb/181/Q181747/
---

## Q181747: SMSINST: Configuration Registry List Box Displays Only 1024 Keys

{% raw %}

	Article: Q181747
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinstkbbuglist
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Systems Management Server Installer 1.0, the Registry Keys summary property
	for the User Configuration installation attribute displays only 1,024 keys for
	any given hive. Similarly, it displays only 1,024 subkeys of any given key. For
	example:
	
	- If HKEY_CLASSES_ROOT has 2,048 subkeys, only the first 1,024 are displayed.
	
	- If the HKEY_CLASSES_ROOT\Interface subkey has 2,048 subkeys, only the first
	  1,024 are displayed.
	
	CAUSE
	=====
	
	The list box on the Registry tab of the User Configuration dialog box is limited
	to displaying 1,024 keys.
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned in the STATUS section
	of this article, or wait for the next version of Systems Management Server
	Installer. The hotfix should have the following timestamp:
	
	  2/23/98      7:25pm      2,130,765 Smsinstl.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodsms 1024
	
	======================================================================
	Keywords          : smsinst kbbuglist
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

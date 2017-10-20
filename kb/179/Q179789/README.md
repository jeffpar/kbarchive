---
layout: page
title: "Q179789: SMSINST: Repackage Of Netscape Communicator 4.03 Pro Fails"
permalink: /kb/179/Q179789/
---

## Q179789: SMSINST: Repackage Of Netscape Communicator 4.03 Pro Fails

{% raw %}

	Article: Q179789
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): smsinst
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server Installer version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to repackage Netscape Communicator 4.03 may fail on systems running
	Windows NT, because the icons created by Systems Management Server Installer do
	not correspond to those created by the actual Netscape installation. The follow
	table lists the icon numbers:
	
	  Icon                  Installer   Netscape
	  Name                  Icon No.    Icon No.
	  ------------------    ---------   --------
	  IBM Host On-Demand         4          5
	  Collabra                  31          4
	  Composer                 155          3
	  Messenger                187         11
	  Navigator                254          1
	  Netcaster                 28          6
	  User Profile Manager      27          7
	
	In the Installation Expert, when you open shortcuts that have icon numbers
	greater than 127 and click OK, you are prompted to enter a number between 0 and
	127, even though Installation Expert put the higher number in the icon number
	field. This may occur with every icon that has a value greater than 127.
	
	WORKAROUND
	==========
	
	To work around the problem you can manually modify the Systems Management Server
	Installer-generated script so that the icon numbers match those created by the
	Netscape installation. The icon numbers are listed in the SUMMARY section of
	this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	Installer version 1.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : smsinst 
	Technology        : kbSMSSearch kbSMSI100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}

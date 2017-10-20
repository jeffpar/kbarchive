---
layout: page
title: "Q238633: SMS: Unable to Create Collection Based on Direct Rule Membership"
permalink: /kb/238/Q238633/
---

## Q238633: SMS: Unable to Create Collection Based on Direct Rule Membership

{% raw %}

	Article: Q238633
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbMMC kbSecurity kbsms200 kbsms200bug kbCollections kbsms200sp2fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you leave the "Search in this collection" box in the Create Direct Membership
	Wizard blank while you are creating a collection based on a direct membership
	rule, you may receive the following error message:
	
	  You do not have Class Read Resource security rights, therefore you must
	  specify a collection.
	
	If you select a specific collection to be limited to in the Collection Limiting
	dialog box, you may receive the following error message:
	
	  You do not have Read Resource security rights to the collection specified.
	  You must specify a different collection."
	
	When this problem occurs, you cannot finish the Create Direct Membership Rule
	Wizard. However, you can successfully create a collection based on a query.
	
	CAUSE
	=====
	
	This problem may occur if you are logged on as a user who belongs to a global
	group that has been granted the appropriate rights to the Collections class to
	create new collections. However, the Direct Membership Rule Wizard does not
	correctly determine the global group membership of the current user.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, assign Read and Read Resource collection class
	rights in addition to the Create right to individual users who need to create
	collections based on direct membership rules.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Method 1: Using the Hotfix Installer
	------------------------------------
	
	NOTE: This method is only for I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q238633.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server using an account with administrative privileges.
	
	3. On the site server, close the Systems Management Server Administrator
	  console.
	
	4. Run Q238633.exe and follow the directions in the wizard. You can run the file
	  in Quiet mode using the /s switch.
	
	5. Shut down and restart the SMS site server.
	
	Method 2: Manual Installation
	-----------------------------
	
	1. Close the Systems Management Server Administrator console.
	
	2. Run RegSvr32.exe to unregister the files that you are about to update. To do
	  so, type the following at a command prompt:
	
	  " regsvr32 /u mmcbasui.dll
	  regsvr32 /u mmcbsuir.dll
	
	  " (without the quotation marks)
	
	
	3. Replace the Mmcbasui.dll file in the
	  <Sms_root_directory>\Bin\<Platform> folder with the version
	  obtained from the hotfix. Run RegSvr32.exe to register the updated file. To
	  do so, type the following at a command prompt:
	
	  " regsvr32 mmcbasui.dll " (without the quotation marks)
	
	4. Replace the Mmcbsuir.dll file in the
	  <Sms_root_directory>\Bin\<Platform> folder with the version
	  obtained from the hotfix.
	  Run RegSvr32.exe to register the updated file. To do so, type the following at
	  a command prompt:
	
	  " regsvr32 mmcbsuir.dll " (without the quotation marks)
	
	Additional query words: prodsms groups mmc admin
	
	======================================================================
	Keywords          : kbMMC kbSecurity kbsms200 kbsms200bug kbCollections kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

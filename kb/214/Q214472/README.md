---
layout: page
title: "Q214472: How to Restrict IIS 4.0 Users and Groups in FrontPage98"
permalink: /kb/214/Q214472/
---

## Q214472: How to Restrict IIS 4.0 Users and Groups in FrontPage98

{% raw %}

	Article: Q214472
	Product(s): Word Front Page
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 02-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to restrict Internet Information Server (IIS) 4.0
	users and groups in FrontPage 98. This allows you to protect the confidentially
	of your user community by not displaying the full Windows account list.
	
	MORE INFORMATION
	================
	
	Whether you have one default site or multiple virtual servers, you can make the
	list unavailable. You have the option to set this globally or on a individual
	virtual server basis. To do this, you must edit the Frontpg.ini file. You will
	then create a local group for the default Web site and every virtual server you
	want to protect on the the Web server. Listed below are the steps for editing
	this file and creating the local group.
	To restrict the default Web site or to globally restrict your virtual servers, do
	the following:
	
	1. Click Start, and then click Run.
	
	2. In the open dialog box, type Frontpg.ini and click OK. (This will open the
	  Frontpg.ini file in Notepad.)
	
	3. Place your cursor at the end of [FrontPage 3.0] and press the Enter key to
	  insert a blank line. Type the following (without the quotation marks):
	  "RestrictIISUsersAndGroups=1"
	
	4. On the File menu, click Save.
	
	To restrict only selected virtual servers, do the following.
	
	1. Locate the [Port /LM/W3SVC/#:](where # is the number of the server instance
	  you want to restrict).
	
	2. Place your cursor at the end of [Port /LM/W3SVC/#:] and press the Enter key
	  to insert a blank line.
	
	3. Type the following (without the quotation marks):
	  "RestrictIISUsersAndGroups=1"
	
	4. On the File Menu, click Save
	
	Note: If you have a large number of virtual servers and are unsure which [Port
	/LM/W3SVC/#:] corresponds to the virtual servers, please see:
	
	  Q214515 How to Determine which Virtual Server or Multihosted Web Site
	  References [Port /LM/W3SVC/#:]
	
	In order for these settings to work correctly, you must add a local group using
	the User Manager for Domains. Listed below are the steps on how to create a
	local group.
	
	1. Click Start, point to Programs, point to Administrative Tools (Common), and
	  then click User Manager for Domains.
	
	2. This will open User Manager. If you are in a domain environment, it may open
	  up in that domain; if it does, you will need to access the local computer. To
	  do this, click Select Domain on the User menu to open a dialog box that
	  allows you to select the domain.
	
	3. In the Domain dialog box, type the name of the computer and click OK. In the
	  left hand corner of User Manager, you should see \\computer name.
	
	4. To create the local group, click New Local Group on the User menu. (This
	  brings up a dialog box that allows you to create a group.)
	
	5. In the group name, type in FP_/lm/w3svc/# (where # refers to the server
	  instance you want to restrict) and click Add.
	
	  Note: The Group Name must reflect the server instance.
	
	6. Verify from the List Names From dialog box that it has the local server's
	  name \\servername where servername is the name of your server).
	
	7. If it does not, select your server's name from the drop-down list.
	
	8. Select the the local server \\servername. (This will show you a list of
	  users), highlight the user's name, and click Add.
	
	9. Click OK. In the lower dialog box, you should see the group you just created.
	  Close User Manager for Domains.
	
	10. You will need to follow steps 1 through 9 for every virtual server you want
	  to restrict. The only difference will be the name of the group
	  FP_/lm/w3svc/#; where the # is substituted for the different numbers in the
	  Frontpg.ini file, which will reflect the number of virtual servers.
	
	REFERENCES
	==========
	
	SERK
	
	Additional query words: Users and Groups
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbiisSearch kbFrontPageSearch kbiis400 _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : WINDOWS:; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

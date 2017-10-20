---
layout: page
title: "Q143061: Accessing Local MS Exchange Mail from a Remote Computer"
permalink: /kb/143/Q143061/
---

## Q143061: Accessing Local MS Exchange Mail from a Remote Computer

{% raw %}

	Article: Q143061
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to access your local Microsoft Exchange mail and
	address book from a remote computer when the local computer is connected the
	local area network (LAN).
	
	MORE INFORMATION
	================
	
	To access your local Microsoft Exchange mail and address book from a remote
	computer, follow the steps in the following sections.
	
	Sharing the Local Address Book and Mail Folders
	-----------------------------------------------
	
	Follow these steps on the local computer:
	
	1. In Windows Explorer, use the right mouse button to click the folder
	  containing your address book (.pab) and mail folder (.pst) files, and then
	  click Sharing on the menu that appears. (These files are often located in the
	  Exchange folder on drive C.)
	
	2. Click Shared As, and grant Full Access rights to the share. Set a password
	  for the share, if necessary. Click OK.
	
	  NOTE: You must have the File and Printer Sharing service installed in order to
	  share the folder.
	
	Setting Up a Profile on the Remote Computer
	-------------------------------------------
	
	Follow these steps on the remote computer:
	
	1. Use the right mouse button to click the Inbox icon on the desktop, and then
	  click Properties on the menu that appears.
	
	2. If a profile is already in use, click Show Profiles, and then click Add. If
	  no profile exists, simply click Add.
	
	3. Clear all check boxes except the Microsoft Mail check box, and then click
	  Next.
	
	4. Type a name for the profile, and then click Next.
	
	5. Type the path for the network location of the post office, and then click
	  Next. For example:
	
	  \\<server>\wgpo0000
	
	6. Click the appropriate user name in the list of names, click Next, and then
	  type the password for the post office account.
	
	7. Type the path for your personal address book on the local computer, and then
	  click Next. For example:
	
	  \\<computername>\<sharename>\mailbox.pab
	
	8. Type the path for your personal information store (mail folders) file, and
	  then click Next. For example:
	
	  \\<computername>\<sharename>\mailbox.pst
	
	9. When you are prompted whether you want the Inbox placed in your Startup
	  group, click the appropriate option, click Next, and then click Finish.
	
	Choosing a Profile
	------------------
	
	If you have more than one profile, you can cause Microsoft Exchange to prompt you
	for the profile to be used when you start Microsoft Exchange. To do so, follow
	these steps:
	
	1. Start Microsoft Exchange.
	
	2. On the Tools menu, click Options.
	
	3. In the When Starting Microsoft Exchange box, click "Prompt for a profile to
	  be used," and then click OK.
	
	Error Messages
	--------------
	
	You may receive the following error messages:
	
	  Your Personal Address Book could not be opened. Another application is
	  already using your Personal Address Book. You must close that application
	  before you can use your Personal Address Book in this application.
	
	  The set of folders could not be opened. The file
	  \\machinename\sharename\mailbox.pst could not be accessed because it is in
	  use by another process.
	
	If you receive these error messages, Microsoft Exchange is running on more than
	one computer and trying to use the same .pab and .pst files. Only one instance
	of Microsoft Exchange can use a set of .pab and .pst files at a time. You must
	close Microsoft Exchange on one or more computers so that only one instance of
	Microsoft Exchange is trying to use the .pab and .pst files.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}

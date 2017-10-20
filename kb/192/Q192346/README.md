---
layout: page
title: "Q192346: WD97: Address Book Icon Doesn't Default to Outlook Contacts"
permalink: /kb/192/Q192346/
---

## Q192346: WD97: Address Book Icon Doesn't Default to Outlook Contacts

{% raw %}

	Article: Q192346
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbdta word97
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Address Book icon (on the Tools menu, click Envelopes And
	Labels), Word displays the contacts in your Personal Address Book (PAB) instead
	of the Outlook Address Book Contacts that you specified when you set the "Show
	this address list first" option.
	
	NOTE: To locate the "Show this address list first" option, click the Start
	button, point to Settings, and then click Control Panel. Double-click the Mail
	(Mail and Fax) icon, and then click the Addressing tab. You may want to set this
	option based on a particular profile.
	
	CAUSE
	=====
	
	Word uses the Personal Address Book (PAB) by default if it finds it configured
	in the current mail profile.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the Personal Address Book from your mail
	profile.
	
	NOTE: Make sure you move your addresses to Contacts in Outlook before you remove
	the Personal Address Book from your mail profile.
	
	To remove the PAB from your mail profile, follow these steps:
	
	1. Quit all Windows programs.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click the Mail (Mail and Fax) icon.
	
	4. On the Services tab, click Show Profiles.
	
	5. On the General tab, select the profile that you want to change, and then
	  click Properties.
	
	6. On the Services tab, select the Personal Address Book, and then click Remove.
	  When the following message appears, click Yes.
	
	  Are you sure you want to remove this information service from the profile?
	
	7. Click OK to close the profile properties dialog box.
	
	8. Click Close to close the Mail (Mail and Fax) dialog box.
	
	If you have only one Outlook Contact folder, Word still may be unable to see it
	even after you remove the Personal Address Book from your profile. To correct
	this situation, you will need to add an additional empty Outlook Contact folder
	using the following steps:
	
	1. In Microsoft Outlook, on the View menu, click Folder List. This will allow
	  you to see all of your Outlook folders in a tree structure.
	
	2. In the Folder List, select Contacts (or your main Contact folder).
	
	3. On the File menu, point to New and then click Folder.
	
	4. Name your new Outlook Contact folder. Ensure the Folder contains box is set
	  to Contact Items and then click OK.
	
	  NOTE: If you are prompted with the following message, click No.
	
	  Would you like a shortcut to this folder added to your Outlook Bar?
	
	When you restart Word, and then click the Address Book icon on the Envelopes or
	the Labels tab, Word should default to the Contact list that you had specified
	in the "Show this address list first" box.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	This problem does not occur in Office 2000.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q171376 OL97: How to Create a New User Profile for Outlook
	
	  Q173461 OL97: Show This Folder as an E-mail Address Book Is Unavailable
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbdta word97 
	Technology        : kbWordSearch kbOutlookSearch kbWord97 kbWord97Search kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q245016: XCLN: Outlook 2000 Attachments Keep Created/Modified Date"
permalink: /kb/245/Q245016/
---

## Q245016: XCLN: Outlook 2000 Attachments Keep Created/Modified Date

{% raw %}

	Article: Q245016
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you save an attachment in Outlook 2000 in Corporate or Workgroup (CW) mode,
	the file's original creation date and modified date are retained. In previous
	versions of Outlook, these two properties are reset to the current system date.
	
	MORE INFORMATION
	================
	
	Users may track versions of various files based upon the Creation date or
	Modified date properties. This feature of Outlook 2000 preserves these
	properties of the attachment when you save the file to the file system.
	
	The Accessed Date property reflects the system date and time that the file was
	saved to the drive. To see the Created date, Accessed date, and Modified date of
	a file in Windows Explorer, right click on the saved file, click Properties and
	look on the General tab. Additionally, Explorer in Details view will show some
	or all of these file properties.
	
	
	If you are using Outlook 2000 as an Internet Mail client rather than an Exchange
	Server client, the Created and Modified date and time are not preserved. When
	you save the file to the file system, the Created and Modified times are
	inconsistent. This is true for Outlook 2000 configured as an Internet Mail
	client, either in Internet Mail Only (IMO) mode or in Corporate or Workgroup
	(CW) mode. For additional information, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q195578 OL2000: (IMO) How to Set Up Internet Mail Accounts
	
	  Q195500 OL2000: (CW) Configuring the Internet E-mail Information Service
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbZNotKeyword3
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

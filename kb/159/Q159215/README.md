---
layout: page
title: "Q159215: XCLN: PAB Location Inconsistent in &quot;Show Names from&quot; listbox"
permalink: /kb/159/Q159215/
---

## Q159215: XCLN: PAB Location Inconsistent in &quot;Show Names from&quot; listbox

{% raw %}

	Article: Q159215
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you display the Address Book, the order in which the Personal Address Book
	(PAB) and the Global Address List (GAL) appear in the "Show Names from the:"
	listbox varies depending on address list was configured first.
	
	MORE INFORMATION
	================
	
	If you add the PAB after running the Microsoft Exchange Client setup, the PAB
	appears after the GAL entries. If the PAB is set up during the initial Microsoft
	Exchange client installation, the PAB appears at the top of the listbox.
	
	To move the PAB to the bottom of the Address Book list, remove the PAB from the
	current profile and add the PAB again.
	
	To put the PAB at the top of the Address Book list, add a new profile by
	following these steps:
	
	1. Click the Mail and Fax icon (the Mail icon in later versions of Microsoft
	  Exchange) in the Control Panel, click Show Profiles, and click Add.
	
	  -or-
	
	  Right-click the Inbox icon, click Properties, click Show Profiles, and click
	  Add.
	
	2. Click Manually Configure Information Services and then click Next.
	
	3. Enter a profile name and click Next.
	
	4. Click Add and select the Personal Address Book.
	
	5. Click OK.
	
	6. Enter a name and path and click OK.
	
	7. Start the Microsoft Exchange client using the new profile.
	
	8. Exit and log off the Microsoft Exchange client.
	
	9. Click the Mail and Fax icon in the Control Panel and add the Microsoft
	  Exchange Server service to this profile.
	
	Additional query words: order
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

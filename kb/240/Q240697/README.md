---
layout: page
title: "Q240697: XCLN: &quot;Outlook Cannot Perform Your Search&quot; Message Using Find"
permalink: /kb/240/Q240697/
---

## Q240697: XCLN: &quot;Outlook Cannot Perform Your Search&quot; Message Using Find

{% raw %}

	Article: Q240697
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WARNING: ANY USE BY YOU OF THE COMMAND-LINE SWITCHES PROVIDED IN THIS ARTICLE IS
	AT YOUR OWN RISK. Microsoft provides these command-line switches without
	warranty of any kind, either express or implied, including but not limited to
	the implied warranties of merchantability and/or fitness for a particular
	purpose. When you use the Find feature in Outlook, you receive the following
	error message:
	
	  Outlook cannot perform your search. Outlook cannot display this view. The
	  folder already exists.
	
	CAUSE
	=====
	
	A previously-defined Advanced Find has been saved and is now corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Quit and log off of Outlook.
	
	2. Click Start, click Run, and in the Open box type:
	
	  outlook /cleanfinders
	
	When you run Outlook with the /cleanfinders switch, it removes all saved searches
	from the mailbox.
	
	MORE INFORMATION
	================
	
	For additional information about this and other command-line switches for
	Outlook 2000, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q197180 OL2000: Additional Command-Line Switches
	
	Outlook 98:
	
	  Q182112 OL98: Additional Command-Line Switches
	
	Outlook 97:
	
	  Q156982 OL97: Additional Command-Line Switches
	
	Additional query words: search 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

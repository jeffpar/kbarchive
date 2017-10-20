---
layout: page
title: "Q234563: XCLN: Errors Using Command Line Switches with Outlook"
permalink: /kb/234/Q234563/
---

## Q234563: XCLN: Errors Using Command Line Switches with Outlook

{% raw %}

	Article: Q234563
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
	
	When you start the Outlook client executable from the Start, Run command prompt,
	you receive the following error message if the backslash for the switch is not
	present:
	
	  Unable to display the selected folder or item. Can't find this file. Make
	  sure the path and filename are correct.
	
	Here is an example:
	
	  Outlook resetfolders
	
	The proper syntax is:
	
	  Outlook /resetfolders
	
	MORE INFORMATION
	================
	
	For more information on using Outlook with command line switches, please see the
	article following article in the Microsoft Knowledge Base:
	
	  Q156982 OL97: Additional Command-Line Switches
	
	Additional query words: 8.0 8.01 8.02 8.03 8.04 8.5 9.0
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

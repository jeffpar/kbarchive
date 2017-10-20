---
layout: page
title: "Q178195: XCLN: How to Install the Server Scripting Extension in Outlook"
permalink: /kb/178/Q178195/
---

## Q178195: XCLN: How to Install the Server Scripting Extension in Outlook

{% raw %}

	Article: Q178195
	Product(s): Microsoft Exchange
	Version(s): 8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Server Scripting extension is installed by default with Microsoft Outlook
	version 8.03. This extension allows a Microsoft Outlook user to manage scripts
	that are used on a Microsoft Exchange Server 5.5 computer. This extension is
	normally listed in the Add-ins dialog box when installed properly. In some
	cases, the extension and its functionality may not be available and it must be
	reinstalled.
	
	MORE INFORMATION
	================
	
	If you remove the extension via the Add-in Manager, it cannot be reinstalled
	again from the Add-in Manager. To reinstall the extension, you must perform the
	following steps:
	
	1. Run the Microsoft Outlook Setup program.
	
	2. Choose the Add/Remove option.
	
	3. Under Microsoft Exchange Server Support, disable the Exchange Scripting Agent
	  option.
	
	4. Repeat the steps above to enable the Exchange Scripting Agent option. This
	  will reinstall any missing or corrupt files or Registry settings.
	
	The Server Scripting extension should now be visible in the Add-in Manager.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbZNotKeyword3 kbOutlook803
	Version           : :8.03
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

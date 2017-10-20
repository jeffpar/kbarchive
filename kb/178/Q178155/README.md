---
layout: page
title: "Q178155: XCLN: Outlook 97 Setup Adds IE Setup Icon to Desktop"
permalink: /kb/178/Q178155/
---

## Q178155: XCLN: Outlook 97 Setup Adds IE Setup Icon to Desktop

{% raw %}

	Article: Q178155
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the Microsoft Outlook 97 Setup program creates a shortcut to the
	Microsoft Internet Explorer Setup program on the Windows Desktop. This shortcut
	will have one of the following names, depending on the version of Microsoft
	Outlook 97 that is being installed:
	
	  Setup for Microsoft Internet Explorer 3.01
	  Setup for Microsoft Internet Explorer 3.02
	
	MORE INFORMATION
	================
	
	This behavior is by design. However, you can use the Microsoft Network
	Installation Wizard (NIW) against a 32-bit Microsoft Outlook 97 client
	installation point to disable this behavior. The NIW is provided with the
	Microsoft Office 97 Resource Kit, and the latest version can be obtained from
	the following Web site:
	
	  http://www.microsoft.com/office/ork
	
	Follow these steps to prevent the IE Setup icon from being created:
	
	1. Start the NIW and select the Setup.lst file where the client installation
	  point is located.
	
	2. On the "Start Menu and Desktop Items" page, disable the Setup for Microsoft
	  Internet Explorer 3.02.lnk option.
	
	3. Complete the remaining steps presented by the NIW.
	
	4. Run the Microsoft Outlook Setup program with the /L command-line option to
	  use the new .lst file that the NIW creates. For example:
	
	  SETUP /L CUSTOM.LST
	
	For more information about using the NIW to customize a Microsoft Outlook
	installation, see the following article in the Microsoft Knowledge Base:
	
	  Q177333 XCLN: NIW Required to Customize Outlook Client Install Point
	
	Additional query words: admin administrative network IE switch ol97 icon
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803
	Version           : :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

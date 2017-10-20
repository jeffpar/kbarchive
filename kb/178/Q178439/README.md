---
layout: page
title: "Q178439: MS Windows NT Tech Support Training Comments and Corrections"
permalink: /kb/178/Q178439/
---

## Q178439: MS Windows NT Tech Support Training Comments and Corrections

{% raw %}

	Article: Q178439
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdocerr
	Last Modified: 22-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Technical Support Training ISBN 1-57231-373-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book Microsoft Windows NT Technical Support
	Training, ISBN 1-57231-373-0.
	
	Note that there are other, separate articles in the Microsoft Knowledge Base on
	this book. To locate them, search the Knowledge Base using the ISBN number or
	title.
	
	The following topics are covered:
	
	- Page 18: Web Site Returns Error Message
	
	- Page 26: Correction For First Bulleted Item
	
	- Page 56: Change "Server Operators" to "Account Operators"
	
	- Pages 365 and 367: Changes To Review Question And Answer #3
	
	- Page 558: Change "system partition" To "boot partition"
	
	MORE INFORMATION
	================
	
	Page 18: Web Site Returns Error Message
	---------------------------------------
	
	Page 18, paragraph 2, Web address:
	
	Change the link for the Microsoft Windows Hardware Compatibility List to:
	
	http://www.microsoft.com/isapi/hwtest/hcl.idc
	
	If this Web site has changed, please navigate to it from the Microsoft Home
	page:
	
	http://www.microsoft.com
	
	
	Page 26: Correction For First Bulleted Item
	-------------------------------------------
	
	On page 26, the first bullet point should be corrected as follows.
	
	Change:
	"Choose to create a partition of 4 GB or less, then complete the installation.
	After you finish installing Windows NT, log on as Administrator and start Disk
	Administrator. You can then use Disk Administrator to extend the NTFS partition.
	Extending an NTFS partition allows you to add unused disk space to the
	partition."
	
	To:
	"After you finish installing Windows NT, log on as Administrator and start Disk
	Administrator. You can then use Disk Administrator to create an NTFS partition
	the size needed. If you have already created an NTFS partition and wish to
	increase the size, you will need to remove the existing partition then create a
	new partition of the desired size."
	
	
	Page 56: Change "Server Operators" to "Account Operators"
	---------------------------------------------------------
	
	In the first Note on page 56, change Server Operators to Account Operators.
	Administrators and Account Operators have the Add Workstation to Domain user
	right by default.
	
	Change:
	"...a user account that has been granted the Add Workstations to Domain user
	right (Administrators and Server Operators have this right by default) and..."
	
	To:
	"...a user account that has been granted the Add Workstations to Domain user
	right (Administrators and Account Operators have this right by default) and..."
	
	
	Pages 365 and 367: Changes To Review Question And Answer #3
	-----------------------------------------------------------
	
	Change the question on page 365, and the question and answer on page 367, to
	read:
	
	3. Your computer running Windows NT Server runs TCP/IP as its primary protocol.
	The server also has NWLink installed, for the sole purpose of hosting
	connections from NetWare clients. How would you optimize the bindings for the
	network?
	
	Examine the Workstation bindings to verify that TCP/IP is listed first. Disable
	the binding between the Workstation service and NWLink, because the workstation
	will never need to establish connections over NWLink.
	
	
	Page 558: Change "system partition" To "boot partition"
	-------------------------------------------------------
	
	On page 558, in the first paragraph under the "Installing the Administration
	Tools on Windows NT Workstation" heading, change "system partition" to "boot
	partition".
	
	Change:
	"The administration tools are installed in the systemroot\System 32 folder on the
	computer's system partition."
	
	To:
	"The administration tools are installed in the systemroot\System 32 folder on the
	computer's boot partition."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 1-57231-373-0 TKBOOK
	
	======================================================================
	Keywords          : kberrmsg kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

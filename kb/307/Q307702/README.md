---
layout: page
title: "Q307702: Microsoft Windows 2000 and IIS 5.0 Administrator's Pocket Consul"
permalink: kb/307/Q307702/
---

## Q307702: Microsoft Windows 2000 and IIS 5.0 Administrator's Pocket Consul

	Article: Q307702
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 21-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 and IIS 5.0 Administrator's Pocket Consultant ISBN 0-7356-1024-X 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows 2000 and IIS 5.0
	Administrator's Pocket Consultant, ISBN 0-7356-1024-X.
	
	The following topics are covered:
	
	- Page 46: Incorrect IP Address In Figure 3-3
	
	- Page 63: Incorrect Text For "Deleting Files"
	
	MORE INFORMATION
	================
	
	Page 46: Incorrect IP Address In Figure 3-3
	-------------------------------------------
	
	On page 46, in Figure 3-3, all three sites should have the same IP address,
	instead of three different IP addresses.
	
	Change both:
	"10.0.0.85" and "10.0.0.102"
	
	To:
	"10.0.0.52"
	
	
	Page 63: Incorrect Text For "Deleting Files"
	--------------------------------------------
	
	On page 63, the text under "Deleting Files" is an exact duplicate of the text
	under "Deleting Directories" on page 62.
	
	Replace the text under "Deleting Files" with the following correct text:
	
	"Deleting Files
	
	You can delete files using Windows Explorer or the Internet Information Services
	snap-in. In Windows Explorer, you can select files to delete using their
	physical directory location. In the snap-in you can follow the virtual directory
	structure to find files you want to delete, which is useful if you know you have
	to delete a file at a specific URL. The file description in the snap-in can also
	tell you if a file is redirected and in which case, you may not want to delete
	the file.
	
	To delete a file in the Internet Information Services snap-in, follow these
	steps:
	
	1. In the Internet Information Services snap-in, click the plus sign (+) next to
	  the Web site you want to work with.
	
	2. Right-click the file you want to delete and then select Delete. When asked to
	  confirm the action, click OK."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ITBOOK 0-7356-1024-X STANEK
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q229898: Developing User Interfaces for Microsoft Windows Corrections"
permalink: kb/229/Q229898/
---

## Q229898: Developing User Interfaces for Microsoft Windows Corrections

	Article: Q229898
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 20-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Developing User Interfaces for Microsoft Windows ISBN 0-7356-0586-6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Developing User Interfaces for Microsoft
	Windows, ISBN 0-7356-0586-6.
	
	Contents:
	
	- Pages 7, 12, and 18: Microsoft Press Title Has Changed
	
	- Page 435: IP Incorrectly Part of BL
	
	- Page 585: Item Repeated in List of Tips
	
	- Chapter 18: SHGetSpecialFolderPath Function May Display Shell32.dll Error
	
	MORE INFORMATION
	================
	
	Pages 7, 12, and 18: Microsoft Press Title Has Changed
	------------------------------------------------------
	
	These pages refer to a Microsoft Press book titled Designing for the User
	Experience. The title of this book has changed to Microsoft Windows User
	Experience, (ISBN 0-7356-0566-1).
	
	
	Page 435: IP Incorrectly Part of BL
	-----------------------------------
	
	On page 435, delete the second sentence of the fourth bullet:
	
	Delete:
	"The last instruction is especially interesting."
	
	
	Page 585: Item Repeated in List of Tips
	---------------------------------------
	
	On page 585, item #128 and #131 are identical. Please delete item #131, and
	renumber the rest of the list items.
	
	
	Ch. 18: SHGetSpecialFolderPath Function May Display Shell32.dll Error
	---------------------------------------------------------------------
	
	In Chapter 18, Appropriate Defaults Are Cool, some sample code uses the
	SHGetSpecialFolderPath API function. This function, which is in Shell32.dll, is
	not available in all versions of Microsoft Windows.
	Shell32.dll is available in Microsoft Windows 98.
	
	
	Microsoft Press has confirmed this to be a problem. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK 0-7356-0586-6
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

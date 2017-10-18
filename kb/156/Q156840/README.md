---
layout: page
title: "Q156840: FP: FrontPage Editor Doesn't Support &quot;border=0&quot; Table Attribute"
permalink: kb/156/Q156840/
---

## Q156840: FP: FrontPage Editor Doesn't Support &quot;border=0&quot; Table Attribute

	Article: Q156840
	Product(s): Word Front Page
	Version(s): ; MACINTOSH:1.0; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kb3rdparty kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194671.
	
	SUMMARY
	=======
	
	FrontPage Editor does not support the addition of "border=0" to the extended
	attributes of a table.
	
	MORE INFORMATION
	================
	
	The proposed HTML 3.2 specification states the following:
	
	  The attributes on TABLE are all optional. By default, the table is rendered
	  without a surrounding border.
	
	Therefore the "border=0" attribute is not necessary.
	
	When Netscape Navigator encounters a table without a border attribute, it
	separates the cells in the table by a space sufficient to render a 1 pixel
	border. This may be a problem when you attempt to align images within a table.
	The "border=0" attribute is required to allow images to be aligned flush against
	each other in Netscape Navigator. This is not required in Microsoft Internet
	Explorer.
	
	For more information about the proposed HTML 3.2 specification, please see the
	following World Wide Web site:
	
	  http://www.w3.org
	
	Netscape Navigator is manufactured by Netscape Corp., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kb3rdparty kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage110
	Version           : :; MACINTOSH:1.0; WINDOWS:1.1
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

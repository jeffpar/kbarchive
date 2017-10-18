---
layout: page
title: "Q173499: WD97: Picture Loses Picture Placeholder Text When Made Hyperlink"
permalink: kb/173/Q173499/
---

## Q173499: WD97: Picture Loses Picture Placeholder Text When Made Hyperlink

	Article: Q173499
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you insert a picture into an HTML document and make the picture a hyperlink,
	the picture placeholder text is lost when you save the document.
	
	WORKAROUND
	==========
	
	To work around this problem, manually add the picture placeholder text to the
	HTML source of the document. To do this, follow these steps:
	
	1. On the View menu, click HTML Source.
	
	2. In the HTML Source, look for the reference to the picture that is a
	  hyperlink.
	
	  For example, if you inserted the picture Commbkgd.gif and linked it to
	  MyDoc.html, look for:
	
	  <A HREF="MyDoc.html"><IMG SRC="COMMBKGD.GIF" BORDER=0 WIDTH=219
	  HEIGHT=163></A>
	
	3. Add the Picture PlaceHolder text to the reference you found; for example:
	
	  <A HREF="MyDoc.html"><IMG SRC="COMMBKGD.GIF" BORDER=0 WIDTH=219
	  HEIGHT=163 ALT="My Image's Alternate Text"></A>
	
	  In this example, you could substitute "My Image's Alternate Text" for whatever
	  text you want.
	
	4. On the View menu, click Exit HTML Source.
	
	5. Save the changes you just made to the HTML Source.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	Picture placeholder text provides an alternate text-only hyperlink for Internet
	browsers incapable of displaying pictures. The picture placeholder text appears
	instead of the picture.
	
	To add picture placeholder text, follow these steps:
	
	1. Click to select the picture you want to add picture placeholder text to.
	
	2. On the Format menu, click Picture.
	
	3. On the Settings tab, enter the alternate text in the Picture Placeholder box,
	  and then click OK.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q164342 WD97: Picture Hyperlinks Lost When Saved as HTML
	
	  Q157637 WD97: Placeholder Replaces Image After Adding Hyperlink
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbgraphic word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

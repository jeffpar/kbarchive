---
layout: page
title: "Q158814: FP: How to Link to Two Target Frames Using a Single Hyperlink"
permalink: kb/158/Q158814/
---

## Q158814: FP: How to Link to Two Target Frames Using a Single Hyperlink

	Article: Q158814
	Product(s): Word Front Page
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft  version of this article, see Q194099.
	
	SUMMARY
	=======
	
	If your FrontPage Web includes a frame set page, you can set a link to specify
	the frame in which you would like a page to be displayed. This article explains
	how to create a link that will be displayed as a Uniform Resource Locator (URL)
	in a frame. (You can also use this procedure to display URLs in multiple
	frames.)
	
	NOTES:
	
	- The code in this article will function only in a Web browser that supports
	  JavaScript.
	
	- ImageMap hot spots will only refresh one frame as extended attributes are not
	  available in the Image Hotspot Properties dialog box.
	
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	To edit your hyperlink to update two frames, follow these steps:
	
	Method 1
	--------
	
	1. In FrontPage Editor, open the page on which you want to create the link.
	
	2. Select the text you want for the link and click the Link button.
	
	  The Create Hyperlink dialog box (the Create Link dialog box in FrontPage 1.1)
	  appears.
	
	3. Click the Current Web tab or the World Wide Web tab. In the Page box, type
	  the URL of the first page that you want to load.
	
	4. In the Target Frame box, type the name of the frame set in which you want the
	  first URL to appear.
	
	5. Click the Extended button, and then click Add.
	
	6. In the Name box, type "onClick" (without the quotation marks).
	
	7. In the Value box, type the following code
	
	  parent.frames[<n>].location.href='<URL>';
	
	  where <n> is a number indicating the frame in which you want the
	  resource to appear, and <URL> is the URL of the page that you want to
	  appear in that frame.
	
	  NOTE: Frame numbers start at 0; hence, parent.frames[2] indicates the third
	  frame in a collection.
	
	  For example, this code
	
	  parent.frames[2].location.href='otherpage.htm';
	
	  loads Otherpage.htm into the third frame in the collection. If you want to
	  load additional frames, repeat step 7 for each frame you want to load
	  (separate each new entry with a space).
	
	8. Click OK three times to accept these changes and return to your page.
	
	Method 2
	--------
	
	1. Point the hyperlink to a new frames page.
	
	2. Set the initial pages of the new frames page to be the desired pages you want
	  the hyperlink to point to.
	
	Additional query words: Front Page kbcode fpscript
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage1xSearch kbFrontPage97Search kbFrontPage110
	Version           : :1.1
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

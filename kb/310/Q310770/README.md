---
layout: page
title: "Q310770: FP2002: JPEG Image Quality Degrades When Inserted into Web Page"
permalink: kb/310/Q310770/
---

## Q310770: FP2002: JPEG Image Quality Degrades When Inserted into Web Page

	Article: Q310770
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you insert a picture into a Microsoft FrontPage Web, the picture appears
	indistinct (fuzzy) when you browse to the Web page that contains the image.
	
	CAUSE
	=====
	
	This behavior can occur if you insert a Joint Photographic Experts Group (JPEG)
	image into a Web page. The JPEG image storage format is classified as a lossy
	compressed 24-bit color format.
	
	This means that the image quality may degrade, or lose detail, each time that you
	save the picture.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the allowable level of image degradation for the
	picture to a higher level. To do this, follow the steps appropriate to your
	operating system.
	
	Microsoft FrontPage 2000
	------------------------
	
	1. Start FrontPage 2000, and then open the Web that you want.
	
	2. On the File menu, click Import.
	
	3. Click Add File, browse to the JPEG file that you want, and then click Open.
	
	4. In the Import dialog box, click OK.
	
	5. Under Folder List, double-click the Web page that you want.
	
	6. On the Insert menu, point to Picture, and then click From File.
	
	7. Click the imported JPEG file, and then click OK.
	
	8. Right-click the inserted image and then click Picture Properties on the
	  shortcut menu that appears.
	
	9. In the Quality box, type "100" (without the quotation marks), and then click
	  OK.
	
	10. On the File menu, click Save.
	
	  The Save Embedded Files dialog box appears.
	
	11. Click Set Action, click Overwrite, and then click OK.
	
	  NOTE: This action sets the default quality setting for the selected image to
	  100, as entered in step 9.
	
	12. Click OK.
	
	Microsoft FrontPage 2002
	------------------------
	
	1. Start FrontPage 2002, and then open the Web that you want.
	
	2. On the File menu, click Import.
	
	3. Click Add File, browse to the JPEG file that you want, and then click Open.
	
	4. In the Import dialog box, click OK.
	
	5. Under Folder List, double-click the Web page that you want.
	
	6. On the Insert menu, point to Picture, and then click From File.
	
	7. Click the imported JPEG file, and then click Insert.
	
	8. On the File menu, click Save. In the "File name" box, type the name that you
	  want, and then click Save.
	
	  NOTE: If the Save Embedded Files dialog box is not displayed, follow these
	  steps:
	
	  a. Resize the picture.
	
	  b. On the Pictures toolbar, click the Resample button.
	
	     NOTE: If the Pictures toolbar is not visible, point to Toolbars on the View
	     menu, and then click Pictures.
	
	  c. On the File menu, click Save As.
	
	  d. In the Save As dialog box, click Save. When you are prompted to replace
	     the existing file, click Yes.
	
	9. In the Save Embedded Files dialog box, click Picture Options.
	
	10. In the Quality box, type "100" (without the quotation marks), and then click
	  OK.
	
	11. Click Set Action, then do one of the following:
	
	   - If the Save Embedded Files dialog box was displayed when you initially
	     saved the Web page that contains the inserted picture, click "Use
	     Existing", and then click OK.
	
	     -or-
	
	   - If you had to resize and then resave the Web page that contains the
	     inserted image before the Save Embedded Files dialog was displayed, click
	     Overwrite, and then click OK.
	
	NOTE: This action sets the default quality setting for the selected image to 100,
	as entered in step 10.
	
	12. Click OK.
	
	MORE INFORMATION
	================
	
	The default quality setting for JPEG images in FrontPage 2000 is 75 (out of a
	maximum of 100). In FrontPage 2002, the default setting is 90. A higher setting
	allows the least amount of image degradation of your JPEG pictures. A lower
	setting in the Quality box reduces the size of the image file.
	
	For additional information about picture formats, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q272399 OFF2000: Guidelines for Selecting the Appropriate Picture Format
	
	Additional query words: front page prb
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

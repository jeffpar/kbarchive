---
layout: page
title: "Q222090: How to Use Document Footers in IIS 5.0"
permalink: kb/222/Q222090/
---

## Q222090: How to Use Document Footers in IIS 5.0

	Article: Q222090
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Services (IIS) 5.0 gives you the ability to include
	document footers in your Web sites. With document footers, you can include
	company information or a Web master's e-mail address on each page. (Document
	footers can be used in many ways; these are just examples.) Document footers can
	only be used on static content.
	
	Footers are set up on a per-site basis. To use this function, follow these
	steps:
	
	1. Open the Internet Services Manager.
	
	2. Expand the name of your computer, and find the Web site that you want to use
	  footers on.
	
	3. Right-click on the Web site and choose Properties.
	
	4. Click the Documents tab.
	
	5. Check the Enable Document Footers and enter or browse to the name of the
	  footer file you want to include.
	
	6. Click OK.
	
	Using document footers can cause problems in certain conditions. For instance,
	because IIS adds this footer to any static content, an Adobe Acrobat (pdf) file
	may fail to open.
	
	If you encounter errors using document footers, you may want to try using the
	"include" statement in your content. For more information about the "include:
	statement, refer to the IIS 5.0 documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbhowto
	
	=============================================================================
	

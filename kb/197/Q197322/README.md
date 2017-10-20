---
layout: page
title: "Q197322: PRB: &quot;Invalid File Format&quot; from ImgEdit Reading Sony Mavica JPG"
permalink: /kb/197/Q197322/
---

## Q197322: PRB: &quot;Invalid File Format&quot; from ImgEdit Reading Sony Mavica JPG

{% raw %}

	Article: Q197322
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0sp3,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbEEdition kbVC600 kbVC500SP3
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0sp3, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Internet Explorer and other image programs, you can successfully
	view .jpg files that are created using a Sony Digital Camera. However, when you
	use the viewing functionality from within the Wang/Kodak Imaging Controls
	(ImgEdit.ocx) that ship with Microsoft Windows 95 and Microsoft Windows 98, you
	see one of the following error messages:
	
	  Invalid File Format; Unable to display image when using ImgEdit OCX
	  provided within the Wang Imaging Controls suite with Windows 95 or
	  Windows NT 4.0
	
	  - or -
	
	  Path/File Access Error; Unable to read or write the specified file;
	  Unable to display image within the Kodak Imaging Controls suite with
	  Windows 98.
	
	CAUSE
	=====
	
	According to the Eastman Software Web page (please see REFERENCES section):
	
	  The Sony Mavica camera generates .JPG files without the required "JFIF"
	  string in the header. The JPEG standard states that an APP0 marker and
	  "JFIF" string (together with the leading SOI marker), make up the header
	  that identifies them as "standard" JPEG/JFIF files. Some applications
	  just recognize the leading "FFD8" SOI marker and don't look for the
	  "JFIF" stamp, thus allowing them to open a wider variety of JPEG files.
	
	The Wang/Kodak Imaging Controls follow the JPEG specification, so if the JFIF
	string is missing, the current versions of Imaging raise an invalid file format
	error. Both Imaging Professional and Imaging for Windows by Eastman Software
	generate this error. However, Imaging Professional 2.0 by Eastman Software
	performs the FFD8 check, so it can read the Sony Mavica files.
	
	NOTE: Eastman Software now provides the Wang/Kodak Imaging Controls.
	
	RESOLUTION
	==========
	
	Currently, the only workaround is to purchase Imaging Professional 2.0 by
	Eastman Software.
	
	REFERENCES
	==========
	
	You can find more (http://support.microsoft.com/download/support/mslfiles/more)
	information regarding this as well as other Image File Format issues at the
	Eastman Software Web site:
	
	  http://www.eastmansoftware.com/products/ImagingPro/Reading_Room/format.htm
	
	======================================================================
	Keywords          : kberrmsg kbEEdition kbVC600 kbVC500SP3 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbVCEE500SP3 kbVCEE600
	Version           : WINDOWS:5.0sp3,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

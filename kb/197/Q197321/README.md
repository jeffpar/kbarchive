---
layout: page
title: "Q197321: PRB: &quot;Invalid File Format&quot; from ImgEdt Reading Sony Mavica JPG"
permalink: /kb/197/Q197321/
---

## Q197321: PRB: &quot;Invalid File Format&quot; from ImgEdt Reading Sony Mavica JPG

	Article: Q197321
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Explorer 5.0 and other image programs allow you to
	successfully view .jpg files that were created using a Sony Digital Camera
	However, you may receive the following errors if you attempt to use the file in
	Visual Basic:
	
	  Run-time Error 321, Invalid File Format; Unable to display image when using
	  ImgEdit OCX provided within the Wang Imaging Controls suite with Windows 95
	  or Windows NT 4.0.
	
	-or-
	
	  Run-time Error 75, Path/File Access Error; Unable to read or write the
	  specified file; Unable to display image within the Kodak Imaging Controls
	  suite with Windows 98 or Windows Me.
	
	CAUSE
	=====
	
	The following paragraph is from the Eastman Software Web page:
	
	  The Sony Mavica Digital Camera generates .jpg files without the required
	  "JFIF" string in the header. The JPEG standard states that an APP0 marker and
	  "JFIF" string, together with the leading SOI marker, make up the header that
	  identifies them as "standard" JPEG/JFIF files. Some applications just
	  recognize the leading "FFD8" SOI marker and do not look for the "JFIF" stamp,
	  thus allowing them to open a wider variety of JPEG files. The Wang Imaging
	  Controls follow the specification, so if the JFIF string is missing, the
	  current versions of Imaging raise an invalid file format error. This error is
	  generated in both Imaging Professional as well as Imaging for Windows.
	  Imaging Professional 2.0 does the more lax "FFD8" check, and so is able to
	  read the Sony Mavica files.
	
	RESOLUTION
	==========
	
	Currently, the only workaround is to purchase Imaging Professional 2.0.
	
	REFERENCES
	==========
	
	For more information, please refer to the Eastman Software Web site at the
	following URL:
	
	  http://www.eastmansoftware.com/common/support/pro/pro_format.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

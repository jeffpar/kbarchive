---
layout: page
title: "Q141934: PRB: Can't Set Picture Object Property from Add-In"
permalink: /kb/141/Q141934/
---

## Q141934: PRB: Can't Set Picture Object Property from Add-In

	Article: Q141934
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbole kbVBp400 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An object property accessed from an Add-In returns a Properties collection, not
	the object specified by the property. This gives you the ability to access
	individual properties of the object as Property objects. However, this means
	that you cannot set the object property to a new object.
	
	In the case of a Font property, each of the individual properties of the Font
	object can be changed from an Add-In. However, in the case of a Picture
	property, each of the individual properties of the Picture object cannot be
	changed. Therefore, any object properties of type Picture cannot be set from an
	Add-In. For a form, this includes the Icon, MouseIcon, and Picture properties.
	
	MORE INFORMATION
	================
	
	It is not possible to set a picture property from an Add-In as follows, where
	objFT is a FormTemplate object and VBInstance is the Application object passed
	to the Add-In:
	
	     Set objFT = VBInstance.ActiveProject.ActiveForm
	     Set objFT.Properties("Picture").Value = LoadPicture("MY.BMP")
	
	The Value property in this case returns a Properties collection not a Picture
	object. You can use this Properties collection to examine and modify the
	properties of the object. The following code shows three different syntaxes for
	accessing the individual properties of a FormTemplate Picture property:
	
	     Print objFT.Properties("Picture").Value("Handle").Value
	     Print objFT.Properties("Picture")("Width")
	     Print objFT.Properties!Picture!Height
	
	The Picture object has Type, Handle, hPal, Height, and Width properties. It is
	not possible to set all of these properties because they are not all read/write
	properties. Therefore, you cannot construct a picture object by simply setting
	all of its properties, as you can a font object.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbVBp400 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	

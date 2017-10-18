---
layout: page
title: "Q155802: WD97: Word Doesn't Find &quot;Float Over Text&quot; Objects"
permalink: kb/155/Q155802/
---

## Q155802: WD97: Word Doesn't Find &quot;Float Over Text&quot; Objects

	Article: Q155802
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Word does not go to, find, or replace some graphics or objects.
	
	CAUSE
	=====
	
	The Go To, Find, and Replace features in Word ignore objects for which the Float
	Over Text option is selected. Other objects that are also ignored include
	WordArt text effects and drawing objects.
	
	NOTE: The Float Over Text property is an option that is selected by default when
	you select an object type (Insert, Object).
	
	WORKAROUND
	==========
	
	There is no workaround currently available for some object types, such as
	WordArt text effects or drawing objects (AutoShapes).
	
	For other objects that have the Float Over Text property, you need to remove this
	property before Word can go to, find, or replace the object.
	
	To remove the Float Over Text property and change the object to an inline object,
	use one of the following methods:
	
	Method 1: Change the property of the object.
	--------------------------------------------
	
	1. Select the picture.
	
	2. On the Format menu, click Object, and then click the Position tab.
	
	3. Click to clear the Float Over Text check box, and then click OK.
	
	Method 2: Convert the object to an inline object.
	-------------------------------------------------
	
	1. Select the picture.
	
	2. On the Edit menu, point to Object, and then click Convert.
	
	  NOTE: Object changes to Clip Object or Picture Object, depending on the type
	  of object you selected.
	
	3. Click to clear the Float Over Text check box, and then click OK.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

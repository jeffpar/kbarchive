---
layout: page
title: "Q117776: Mac Cinemania 94: Foreign and Special Characters Display as Bo"
permalink: /kb/117/Q117776/
---

## Q117776: Mac Cinemania 94: Foreign and Special Characters Display as Bo

{% raw %}

	Article: Q117776
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1994 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania for the Macintosh 1994 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Foreign language or special characters in the text of a review or cast list may
	display as boxes or as some other incorrect character.
	
	CAUSE
	=====
	
	This problem occurs because of a conflict between the appropriate Lucida font
	(installed with Cinemania) and another font previously installed on the system.
	
	RESOLUTION
	==========
	
	To correct this problem, do the following:
	
	1. Delete the V Lucida Sans font suitcase.
	
	2. Using Finder, reinstall the V Lucida Sans font suitcase from the Cinemania
	  CD.
	
	3. Use Finder to reinstall any add-on font packages.
	
	The special and foreign characters should now display correctly.
	
	MORE INFORMATION
	================
	
	The Apple system fonts are assigned certain ID numbers. When add-on fonts are
	installed, they must use ID numbers in a different range than that reserved for
	the system fonts. Sometimes a conflict can occur when a program other than the
	Finder (for example, an application's installer program) designates the add-on
	fonts' ID numbers. Allowing Finder to reset these ID numbers corrects the
	problem.
	
	Additional query words: mac 1994 multi media multimedia multi-media movies films reviews display screen names letters
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1994Mac
	Version           : :1994 edition
	
	=============================================================================
	

{% endraw %}

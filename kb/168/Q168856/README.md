---
layout: page
title: "Q168856: WD97: Background Texture Tab Doesn't Display Correct Path"
permalink: /kb/168/Q168856/
---

## Q168856: WD97: Background Texture Tab Doesn't Display Correct Path

{% raw %}

	Article: Q168856
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage winword word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a background texture using a Web address to insert a custom
	picture that is not one of the included backgrounds, the path for that picture
	is not displayed correctly on the Texture tab.
	
	When you insert a background graphic from a URL, for example
	http://www.domain.com/picture.gif, the path to the picture is displayed as
	//www.domain.com/picture, leaving off both the "http:" and the .gif extension.
	
	WORKAROUND
	==========
	
	To insert a background texture:
	
	1. On the Format menu, point to Background, and then click Fill Effects.
	
	2. Click the Texture tab, and then click Other Texture.
	
	3. Click to select a new texture, and then click OK.
	
	4. Click OK to close the Fill Effects dialog box.
	
	There is no way to change the path or to make it display correctly. This problem
	does not change the functionality of the background image. The preview and the
	background will display properly.
	
	STATUS
	======
	
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you insert a background picture from a Web site into your HTML document,
	Microsoft Word does not save the Web location (as displayed on the Texture tab)
	as the source of the picture. Word will copy the picture to your local drive and
	rename the picture to something similar to "Image37.gif." You can determine the
	name of the background picture by viewing the HTML Source of your document and
	by finding the "BACKGROUND = <file name>" statement.
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbusage winword word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}

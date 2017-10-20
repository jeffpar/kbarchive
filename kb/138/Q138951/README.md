---
layout: page
title: "Q138951: PPT7: Object w/ White Text, Black Background Prints Solid Black"
permalink: /kb/138/Q138951/
---

## Q138951: PPT7: Object w/ White Text, Black Background Prints Solid Black

{% raw %}

	Article: Q138951
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbprint kbdta kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A text box that has a black fill and contains white text is printed entirely
	black when you print it to a black and white printer. This means that you cannot
	read the text.
	
	CAUSE
	=====
	
	This problem occurs when the Black & White check box is selected in the
	Print dialog box. This option instructs the printer to print black on black. It
	is selected by default when you select a black and white printer driver.
	
	RESOLUTION
	==========
	
	To print the object so that white text is printed on a black background, use one
	of the following methods.
	
	Method 1: Turn Off the Black & White Print Option
	-------------------------------------------------
	
	1. On the File menu, click Print.
	
	2. Click to clear the Black & White check box.
	
	3. Click OK.
	
	
	Method 2: Use Black And White View
	----------------------------------
	
	NOTE: Black And White view allows you to see what the object looks like when
	printed in black and white, but it does not change the way the presentation
	looks in color.
	
	1. On the View menu, click Black And White. The objects on the slide now appear
	  as they will be printed on a black and white printer. You cannot see the
	  white text at this point.
	
	2. Right-click the object, point to Black and White, and then click Grayscale.
	
	  The white text is now visible and the object will print correctly.
	
	Method 3: Merge the Presentation to a New File
	----------------------------------------------
	
	NOTE: This method assumes that some corruption exists in the presentation file.
	Try Method 1 and Method 2 before you try this method.
	
	1. Create a blank presentation.
	  a. On the File menu, click New.
	
	  b. Click the General tab, select Blank Presentation, and click OK.
	
	  c. Select the Blank AutoLayout, and click OK.
	
	2. On the Insert menu, click Slides From Files, and then click the Find
	  Presentation tab.
	
	3. Click Browse. Select the presentation you want and click Open.
	
	4. In the Slide Finder dialog box, click Display.
	
	5. Click Insert All.
	
	  All of the slides in your presentation are inserted into the new presentation.
	
	6. Click Close.
	
	7. Apply the original presentation as a template.
	  a. On the Format menu, click Apply Design.
	
	  b. Select your presentation and then click Apply.
	
	8. Delete the blank slide you created in step 1.
	  a. On the View menu, click Slide Sorter.
	
	  b. Select the blank slide.
	
	  c. On the Edit menu, click Delete Slide.
	
	9. Follow the steps under Method 2.
	
	The object should now print correctly.
	
	
	Additional query words: Hewlett Packard print HP LaserJet II IIp IId III IIIp IIIsi 4 4si 4m w_powerpt powerpnt ppt7 pp7 ppt95 pp95
	
	======================================================================
	Keywords          : kbprint kbdta kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

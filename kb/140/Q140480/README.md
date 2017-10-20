---
layout: page
title: "Q140480: PPT7: Run-Time Error 6 Using the Genigraphics Wizard"
permalink: /kb/140/Q140480/
---

## Q140480: PPT7: Run-Time Error 6 Using the Genigraphics Wizard

{% raw %}

	Article: Q140480
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbwizard
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the Genigraphics Wizard, you may get the following error:
	
	  Run-Time error '6':
	
	  Overflow
	
	CAUSE
	=====
	
	This error occurs when your slide size is greater than 22.8 inches tall or wide.
	
	RESOLUTION
	==========
	
	There are two ways to resolve this problem:
	
	Method 1: Use the GraphicsLink program
	--------------------------------------
	
	Use the GraphicsLink program to send your presentation to Genigraphics:
	
	1. Run the program Graflink.exe. This file is located in the
	  C:\MSOffice\PowerPnt folder.
	
	2. On the File menu, click New.
	
	3. In the "Select a File to Include With Your Order" dialog box, choose the
	  presentation you want to send.
	
	4. Click Open.
	
	5. Fill in the required information in the Order Information dialog box. Click
	  Next.
	
	6. In the Shipping Instructions dialog box, change the information in the
	  Application Used text box to:
	
	  "PowerPoint 95" (without the quotation marks)
	
	7. Fill in the other information required by the Shipping Instructions dialog
	  box. Click Next.
	
	8. Fill in the required information in the Billing Information dialog box. Click
	  Next.
	
	9. Verify the information and click Finish.
	
	Method 2: Reduce the dimensions
	-------------------------------
	
	Reduce the dimensions of the slide so that the largest dimension is smaller than
	22.8 inches:
	
	1. On the File menu, click Slide Setup.
	
	2. Choose smaller dimensions for your slide height and width (be sure to keep
	  the same height-to-width ratio). Click OK.
	
	3. On the File menu, click Send To Genigraphics.
	
	4. Complete the Genigraphics Wizard.
	
	
	MORE INFORMATION
	================
	
	When you use the Genigraphics Wizard, there is an option to send Special
	Instructions to Genigraphics. Enter information on how you reduced the slide
	size and what size that the final image size should be.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft PowerPoint for Windows
	95, version 7.0. This problem was corrected in Microsoft PowerPoint 97 for
	Windows.
	
	Additional query words: 7.00 ppt95 ppt7 Genigraphics wizard run-time w_powerpt powerpnt
	
	======================================================================
	Keywords          : kb3rdparty kbwizard 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	

{% endraw %}

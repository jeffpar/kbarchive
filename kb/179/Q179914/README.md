---
layout: page
title: "Q179914: BUG: Terminal Font at 6 Point Size in List Box Grows in Size"
permalink: /kb/179/Q179914/
---

## Q179914: BUG: Terminal Font at 6 Point Size in List Box Grows in Size

{% raw %}

	Article: Q179914
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Windows, versions 2.6, 2.6a 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an OEM Terminal font 6 point size is used as the screen font, large amounts
	of text displayed in a list box change to a larger font size when a system
	window such as Control Panel is opened on top of the FoxPro application window.
	The 6 point font size returns when the system is shutdown and restarted but the
	font size changes again as soon as a system window is opened.
	
	This behavior occurs when you are running FoxPro for Windows on a computer with
	Windows 95. The problem does not occur in FoxPro under the Windows NT operating
	system.
	
	RESOLUTION
	==========
	
	Do not use the Terminal font or any other screen font for text in a list box.
	Either use a TrueType font or upgrade the operating system to Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	FoxPro for Windows versions 2.6, 2.6a
	-------------------------------------
	
	1. Start FoxPro for Windows 2.6(a) under the Windows 95 operating system.
	
	2. Use the Customer.dbf table in the FoxPro for Windows TUTORIAL subdirectory.
	  The following command opens the table:
	
	        USE HOME()+"Tutorial\Customer"
	
	3. Create a new screen.
	
	4. Add a list box that covers the entire width and height of the new screen. In
	  the List dialog box, set the List Items to be From Field. Click the field
	  button to open the expression builder. Enter the following expression (or
	  similar string to display a large amount of text):
	
	  company+contact+address+city+state+zip+phone+ono+cno
	
	  For the variable for the list, type an x. Click OK to close the List dialog
	  box.
	
	5. With the list box selected, click the Font command from the Object menu.
	  Select Terminal, regular 6, as the font for the list box.
	
	6. Save the screen and name it Test.spr.
	
	7. In the FoxPro Command window, type the following command:
	
	        DO Test.spr
	
	  The list box should be displaying properly with the Terminal 6 point font.
	
	8. From the Windows 95 Start menu, select Settings and then click Control Panel.
	
	9. Close Control Panel and activate FoxPro.
	
	10. Click an item in the list box. The text changes to a larger, bold font.
	  Click an item in the list box and drag the selection up and down the list
	  box while the left mouse button is pressed. All the list box items change to
	  a larger, bold font.
	
	Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a
	--------------------------------------------------------
	
	1. Start Visual FoxPro under the Windows 95 operating system.
	
	2. Type the following code in the FoxPro Command window:
	
	        SET DEFAULT TO HOME()+"SAMPLES\DATA"
	
	3. Create a new program with the following code:
	
	        USE customer SHARED
	        DEFINE POPUP getpop ;
	           PROMPT FIELD cust_id+company ;
	              + contact + address ;
	              + city + region ;
	              + postalcode + phone ;
	              + country + cust_id ;
	              SCROLL
	        DEFINE WINDOW XXX FROM 1,1 TO 50,100
	        ACTIVATE WINDOW XXX
	
	        @ 11,10 GET popit PICTURE "@&N" ;
	           POPUP getpop SIZE 30.000,90.667 ;
	           DEFAULT " " FONT "Terminal", 6 STYLE ""
	
	        READ CYCLE
	        CLEAR ALL
	        *** end of program
	
	4. Run the program. The items in the list box display with the correct font
	  size.
	
	5. From the Windows 95 Start menu, choose Settings, and then click Control
	  Panel.
	
	6. Close Control Panel and activate FoxPro.
	
	7. Click an item in the list box. The text changes to a larger, bold font. Click
	  an item in the list box and drag the selection up and down in the list box
	  while the left mouse button is pressed. All the list items change to a
	  larger, bold font.
	
	NOTE: Duplication of any or all of the behavior described above is unreliable and
	random. Since the OEM Terminal screen font does not reside in the Windows 95
	operating system but is a font that is subject to Windows 95 font substitution,
	the font may be rendered differently on different computer hardware. Testing by
	Microsoft has produced three different scenarios on three different computers
	without the identification of a factor that would allow control of the
	scenario.
	
	The three scenarios are:
	
	- Cannot make the font size change occur under any circumstances.
	
	- The font size change happens before displaying the system window and never
	  correctly displays the chosen font.
	
	- The font size change does or does not occur depending upon whether the system
	  window is closed or minimized.
	
	REFERENCES
	==========
	
	Microsoft FoxPro for Windows Help, 2.6x Help; search on: "Fonts"; Topic:
	"Interface Tips"
	
	Microsoft Visual FoxPro for Windows Help; search on: "Fonts"; Topic: "Overview"
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	Additional query words: raster
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro260a kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:2.6,2.6a,3.0,3.0b,5.0,5.0a
	
	=============================================================================
	

{% endraw %}

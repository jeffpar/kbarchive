---
layout: page
title: "Q141736: How to Create a Clock Class to Show Time in AM/PM Format"
permalink: /kb/141/Q141736/
---

## Q141736: How to Create a Clock Class to Show Time in AM/PM Format

{% raw %}

	Article: Q141736
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The TIME() function in Visual FoxPro returns the time as a character string in
	the format of hh:mm:ss. With this format, 1:35:30 PM displays as 13:35:30 and
	9:45:30 AM displays as 09:45:30. In certain situations, you may prefer the
	standard time display with the AM/PM format. This article shows you how to do
	it.
	
	MORE INFORMATION
	================
	
	The following steps create a Visual FoxPro Class that displays the current time
	in the standard AM/PM format when you place it on a form.
	
	Steps to Create Clock Class
	---------------------------
	
	1. Type the following command in the Command window:
	
	     CREATE CLASS.
	
	2. In the dialog box, enter oClock in the Class Name field, Container in the
	  Based On field, and a name for the .VCX file in the Store in field.
	
	3. Add a Timer control to the container, and give the Timer control the
	  following property values and event codes:
	
	     Name: Clock
	     Interval: 1000
	
	     Timer event method:
	
	        This.Parent.tdisplay.Refresh
	
	4. Add a text box to the container, and give the text box the following property
	  values and event code:
	
	     Name: tdisplay
	     DisabledBackColor: 255,255,255
	     DisabledForeColor: 0,0,0
	     Enabled: .F.
	     FontName: Arial
	     FontSize: 10
	     Height: 24
	     Width: 85
	
	     Init event:
	
	        This.Top=0
	        This.Left=0
	
	     Refresh method:
	
	        This.Value=IIF(BETWEEN(VAL(LEFT(Time(),2)),12,23), ;
	           ALLTRIM(STR(VAL(LEFT(Time(),2))-12))+ SUBSTR(Time(),3,6)+' PM', ;
	           IIF(BETWEEN(VAL(LEFT(Time(),2)),1,11), ;
	           ALLTRIM(STR(VAL(LEFT(Time(),2))))+ SUBSTR(Time(),3,6)+' AM', ;
	           '12'+ SUBSTR(Time(),3,6)+ ' AM'))
	
	5. Add the following code to the Init event of Oclock:
	
	     This.Width=This.tdisplay.Width
	     This.Height=This.tdisplay.Height
	
	6. Save the container class. Then type the following in the Command window:
	
	     CREATE FORM seeclock
	
	7. On the Form Controls toolbar, click the Visual Class tool.
	
	8. On the Visual Class menu, click Add. Locate the .vcx file where you saved the
	  oClock class. Select the oClock object from the Form Controls toolbar and
	  drop it on the form.
	
	9. Save and run the form. The system time will display on the form in the
	  standard AM/PM format.
	
	To add functionality to the clock to allows toggling between both the standard
	AM/PM and military (24 hour) formats, make the following modifications to the
	Class:
	
	Steps to Add Format-Toggling Functionality
	------------------------------------------
	
	1. While the oClock container is open in design mode, click New Property on the
	  Class menu. In the New Property dialog box, enter lttoggle as the Name, and
	  click OK.
	
	2. In the Init event of oClock, add the following line of code:
	
	     This.lttoggle=.t.
	
	3. In the Refresh method of tdisplay, the followings lines of code replace the
	  lines of code for the Refresh method as shown in Step 4 in the previous
	  section:
	
	     IF This.Parent.lttoggle
	        This.Value=IIF(BETWEEN(VAL(LEFT(Time(),2)),12,23), ;
	           ALLTRIM(STR(VAL(LEFT(Time(),2))-12))+ SUBSTR(Time(),3,6)+' PM', ;
	           IIF(BETWEEN(VAL(LEFT(Time(),2)),1,11), ;
	           ALLTRIM(STR(VAL(LEFT(Time(),2))))+ SUBSTR(Time(),3,6)+' AM', ;
	           '12'+ SUBSTR(Time(),3,6)+ ' AM'))
	        This.Width=85
	        This.Parent.Width=85
	     ELSE
	        This.Value = Time()
	        This.Width=60
	        This.Parent.Width=60
	     ENDIF
	
	4. In the oClock DblClick event, enter the following two lines of code:
	
	     This.lttoggle= !This.lttoggle
	     This.tdisplay.Refresh
	
	5. Save the container class.
	
	6. Run the previously saved seeclock form. When the form initially loads, the
	  time is displayed in standard AM/PM format. Double-click the oClock object,
	  and note that the time now toggles to military format. Then double-click the
	  Clock object to toggle the time display between the two formats.
	
	Additional query words: VFoxWin normal switch
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q127179: PRB: Output from TIME() Does Not Change with SET HOURS"
permalink: /kb/127/Q127179/
---

## Q127179: PRB: Output from TIME() Does Not Change with SET HOURS

{% raw %}

	Article: Q127179
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If TIME() is supplied as the initial value of a text box, The SET HOURS TO
	command has no effect on the time value displayed.
	
	CAUSE
	=====
	
	TIME() returns a character string in the 24-hour HH:MM:SS format regardless of
	the SET HOURS setting. As a result, the text box control is not a time value but
	a character value and will behave as such.
	
	WORKAROUND
	==========
	
	Add a new method to the form to perform the necessary conversion regardless of
	whether the SET HOURS TO value is determined by the current environment settings
	or changed programmatically at run-time.
	
	Step-by-Step Example
	--------------------
	
	Steps 1 through 5 in the following procedure illustrate how to change the hours
	setting in a program by adding two option buttons. You can omit steps 2 through
	5 if desired.
	
	1. Open the desired form or create a new one named Form1.
	
	2. Choose the Form Control toolbar from the View menu.
	
	3. Pick the Option Group tool, and put a set of Option Buttons on the form.
	  Change the Caption Property for each to read '12 Hour' and '24 Hour'
	  respectively.
	
	4. Double-click the Option Buttons to open the OptionsGroup1 code dialog.
	
	5. Select Option1 under the Object list box. Then select Click from the
	  procedure list box, and enter this code:
	
	     SET HOURS TO 12
	     THISFORM.TEXT1.VALUE = THISFORM.CivTym()
	
	  While in the same code dialog, select Option2 from the Object combo box, and
	  enter this code:
	
	     SET HOURS TO 24
	     THISFORM.TEXT1.VALUE = TIME()
	
	6. If a new form was created in step 1, add a Text box (Text1) to the form, and
	  remove any previous value of the Text1 text box from the Properties sheet.
	
	7. While Form Designer is selected, choose the Form menu pad from the system
	  menu, and select New Method. Enter CivTym as the Method Name.
	
	8. In the Description box, enter the following and click OK to save the new
	  method descriptor:
	
	     Returns civilian time (hh:mm:ss ampm)
	
	9. Choose Properties under the system menu View pad or click Form1 with the
	  alternate mouse key to bring up the Options menu and choose Properties.
	
	10. While Form1 is shown as the current object, choose the Method tab.
	
	11. Double-click the civtym procedure at the end of the Method list, and enter
	  this code:
	
	      cTym = TIME()     && Save the current time string
	      iHr  = VAL(LEFT(cTym,2))   && extract the numerical hour
	      lPm  = iHr > 12   && logically, is it post meridian (after noon)?
	      RETURN STR( IIF( lPm, iHr - 12, iHr ), 2 ) + SUBSTR( cTym, 3 ) + ;
	              " " + IIF( lPm, 'p', 'a' )+".m."
	
	12. From the same dialog, select the Init procedure, and enter this code:
	
	      IF SET('HOURS') > 12
	         THISFORM.TEXT1.VALUE = TIME()
	         ** optional setting code: remove if option buttons omitted
	         *
	         THISFORM.OPTIONGROUP1.OPTION1.VALUE = 0
	         THISFORM.OPTIONGROUP1.OPTION2.VALUE = 1
	         *
	         ** end of optional setting code
	      ELSE
	         THISFORM.TEXT1.VALUE = THISFORM.CivTym()
	         ** optional setting code: remove if option buttons omitted
	         *
	         THISFORM.OPTIONGROUP1.OPTION1.VALUE = 1
	         THISFORM.OPTIONGROUP1.OPTION2.VALUE = 0
	         *
	         ** end of optional setting code
	      ENDIF
	
	13. Type SET HOURS TO 12 in the Command window.
	
	14. Run the form, and note the display. If option buttons are used, note which
	  is selected; then change it to 24 hours. Close the form. Then re-run it with
	  the opposite hours setting in effect, and note the display.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}

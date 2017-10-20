---
layout: page
title: "Q198098: PRB: CSng/CDbl Not Using Regional Settings for Decimal Symbol"
permalink: /kb/198/Q198098/
---

## Q198098: PRB: CSng/CDbl Not Using Regional Settings for Decimal Symbol

{% raw %}

	Article: Q198098
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the Regional Settings to make the Number's decimal symbol the
	same as the Currency's "digit grouping symbol," CSng does not interpret this
	character as a decimal point. Therefore, you get a different result that you
	would have in Visual Basic 5.0. This is also the case for the CDbl function.
	
	CAUSE
	=====
	
	The new oleaut32 checks to see if the character is the Currency "digit grouping
	symbol" first. If it is, then even if it's also the Number's decimal symbol, it
	will be considered as the Currency "digit grouping symbol" instead of the
	Number's decimal symbol.
	
	RESOLUTION
	==========
	
	Resolve the conflicting by using the Regional Settings in the Control Panel on
	the Start menu.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This new behavior is an enhancement, because the String you want to change to a
	Single value may represent Currency, so it should be transformed to a correct
	value. If you choose default settings for the locale, the decimal point symbol
	is always different than that used as the digit grouping symbol of Currency. So
	this problem only happens when one of these two settings is manually changed,
	creating a conflict. Having conflicting symbols is not valid (not just in this
	situation, but also in other situations) and will probably cause other problems
	as well.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE project. Form1 is created by default.
	
	2. Add a CommandButton to Form1 and place the following code into Form1's code
	  window:
	
	        Private Sub Command1_Click()
	           Dim s As Single
	           s = CSng("3,5")
	           MsgBox s
	           s = CSng("3.5")
	           MsgBox s
	        End Sub
	
	3. Click "Start" on the Windows task bar, then Click "Settings" and then
	  "Control Panel." A folder is displayed. Double-click the "Regional Settings"
	  icon and you get a dialog box. Click the "Regional Settings" tab. Choose
	  English (United States) from the drop-down ComboBox. Click "OK" (you may be
	  asked to install the language packages and/or restart your system.) Run the
	  app in Visual Basic 5.0 and in Visual Basic 6.0. You will get consistent
	  results as 35 then 3.5.
	
	4. Return to the Regional Settings as above. Click the Number tab and set the
	  Decimal Symbol to be a comma (,), set the "Digit grouping symbol" to be a
	  period (.), and click OK. Run the app in Visual Basic 5.0 and you get 3,5 and
	  35 respectively. Run it in Visual Basic 6.0 and you get 35 (which is the new
	  behavior) and 35.
	
	======================================================================
	Keywords          : kbVBp kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

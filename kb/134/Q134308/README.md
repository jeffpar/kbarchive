---
layout: page
title: "Q134308: FIX: Upper Format Truncates Right/Center-Alligned Report Field"
permalink: /kb/134/Q134308/
---

## Q134308: FIX: Upper Format Truncates Right/Center-Alligned Report Field

	Article: Q134308
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a report designed with a field, variable, or expression formatted as
	uppercase and justified (alligned) either to the right or center of the area on
	the page for that field, you may encounter a probem. Upon clicking the OK button
	to open and close the report expression dialog box repeatedly (usually done
	after previewing or printing the report), you may see that the field, variable,
	or expression has been reduced to a single character; all the characters to the
	right of the first character have been truncated. The field, variable, or
	expression now appears as a single uppercase character alligned to the right or
	to the center. The format picture code character string of "@!J" (without the
	quotes) is transposed and enlarged to the string "@J<space>!"
	
	Each time the Report Expression dialog box is reentered the number of spaces
	between the justification code (J for right, I for center) and the uppercase
	code (!) is increased by one if the OK button is used to close the dialog box.
	
	WORKAROUND
	==========
	
	One way to restore the field to the desired format is to delete the format
	picture codes from the Format text box in the Report Expression dialog box. Then
	click the three-dot button at the right to move to the Format dialog. Restore
	the formats by selecting the To Upper Case check box, and the appropriate
	justification check box.
	
	Another way to work around the problem is to delete the space(s) that appear in
	the format picture codes string between the justification character (a J or an
	I) and the exclamation point that indicates uppercase. This is the string that
	appears in the Format text box in the Report Expression dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Set the default directory to Samples\Data.
	
	2. Open the Testdata database by using the MODIFY DATABASE TESTDATA command,
	
	3. Open the Customer table by using the USE CUSTOMER command.
	
	4. Create a new report consisting of the Company, Contact, and Title fields. To
	  do this, on the File menu, click New. Then click Report, and click New File.
	  Then open the data environment of the report and add the Customer table to
	  it. Drag the selected fields to the Detail band of the Report Designer.
	
	5. Double-click the Contact field to open the Report Expression dialog box.
	
	6. Click the three-dot button located to the right of the Format text box.
	
	7. Select the To Upper Case check box under Editing Options.
	
	8. Clear the Left justify check box, and select the Right justify check box.
	
	9. Click OK to return to the Report Expression dialog box. Note the format
	  picture codes. Now click OK to exit the Report Expression dialog box.
	
	10. On the View menu, click Preview. Note that the Contact field appears is in
	  uppercase and right-justified (right-alligned).
	
	11. On the Preview toolbar, click the open door icon to return to the Report
	  Designer.
	
	12. Double-click the Contact field to open the Report Expression dialog box.
	  Here you will observe, in the Format edit box that the picture code
	  characters are in a sequence different from that originally seen.
	
	13. Click OK to return to the Report Designer, and on the View menu, click
	  Preview to preview the report again. Note that the Contact field is now a
	  single uppercase letter positioned at the right of the field's area on the
	  report.
	
	14. Return to the Report Designer. Double-click the Contact field. Note the
	  spacing between characters in the Format text box.
	
	15. Click OK. Then double-click the Contact field again, and note that the
	  spaces in the Format text box have increased by one.
	
	Additional query words: 3.00 3.00b picture function
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

---
layout: page
title: "Q177287: WD97: How to Specify Multiple Conditions with a Nested IF Field"
permalink: /kb/177/Q177287/
---

## Q177287: WD97: How to Specify Multiple Conditions with a Nested IF Field

{% raw %}

	Article: Q177287
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbfield word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In a mail merge main document, you can use an IF (IF...THEN...ELSE) conditional
	statement to check whether one condition or multiple conditions are met.
	
	This article provides a method of nesting COMPARE statements in an IF field to
	test whether the desired conditions are met.
	
	For additional information about evaluating MERGEFIELDS without using the COMPARE
	field, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q90393 WD97: How to Use Nested IF Fields in a Print Merge Document
	
	  Q195659 WD97: How to Use Conditional Field to Specify Number of Digits
	
	  Q176881 WD97: Err Msg: "Fields Are Nested Too Deeply" in Mail Merge
	
	MORE INFORMATION
	================
	
	You can specify multiple conditions by nesting a COMPARE field inside an IF
	field.
	
	NOTE: To type field brackets ( { } ) in a Word document, press CTRL+F9. To turn
	field codes on and off, press ALT+F9.
	
	To Test Whether Multiple Conditions Are Met
	-------------------------------------------
	
	To test whether multiple fields meet certain conditions, you can use an AND
	conditional statement in your mail merge main document similar to the
	following:
	
	  { IF { = AND ( { COMPARE { MERGEFIELD Field_1 } = "Value" }, { COMPARE {
	  MERGEFIELD Field_2 } = "Value" } ) } = 1 "True Instructions" "False
	  Instructions" }
	
	The result of these nested COMPARE statements would be the "True Instructions"
	when both Field_1 and Field_2 are equal to "Value"; otherwise, the "False
	Instructions" would be given as the result.
	
	NOTES:
	
	- When all of the conditions of the AND statement are met, the value returned
	  by the statement would be equal to 1 (this would result in the True
	  Instructions being returned).
	
	- When all of the conditions of the AND statement are not met, the value
	  returned by the statement would be equal to 0 (this would result in the False
	  Instructions being returned).
	
	To Test Whether One Condition Is Met
	------------------------------------
	
	To test whether one of the fields meets a particular condition, you could use an
	OR conditional statement in your mail merge main document similar to the
	following:
	
	  { IF { = OR ( { COMPARE { MERGEFIELD Field_1 } >= "Value" }, { COMPARE {
	  MERGEFIELD Field_2 } >= "Value" } ) } = 1 "True Instructions" "False
	  Instructions" }
	
	The result of these nested COMPARE statements would be the "True Instructions"
	when either Field_1 or Field_2 is equal to "Value"; otherwise, the "False
	Instructions" would be given as the result.
	
	NOTES:
	
	- When any of the conditions of the OR statement is met, the value returned by
	  the statement would be equal to 1 (this would result in the True Instructions
	  being returned).
	
	- When all of the conditions of the OR statement are not met, the value
	  returned by the statement would be equal to 0 (this would result in the False
	  Instructions being returned).
	
	For more information about conditional statements, click the Office Assistant,
	type "advanced mail merge" (without the quotation marks), click Search, and then
	click to view "Customize documents created with mail merge."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: mailmerge
	
	======================================================================
	Keywords          : kbdta word8 kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

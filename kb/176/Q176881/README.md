---
layout: page
title: "Q176881: WD97: Err Msg: &quot;Fields Are Nested Too Deeply&quot; in Mail Merge"
permalink: /kb/176/Q176881/
---

## Q176881: WD97: Err Msg: &quot;Fields Are Nested Too Deeply&quot; in Mail Merge

{% raw %}

	Article: Q176881
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use a nested IF field in a Word mail merge, the following error message
	may appear:
	
	  Fields are nested too deeply
	
	NOTE: This error message may also appear when you use an INCLUDETEXT field as
	part of a mail merge main document to insert (include) a document containing a
	nested IF field, even when the nested IF field does not contain more than 20
	levels.
	
	CAUSE
	=====
	
	This functionality is by design. Word supports field nesting only to 20 levels.
	
	NOTE: If you use an INCLUDETEXT field to insert a subdocument (containing nested
	IF fields) in a mail merge main document, the nested IF fields are nested
	several levels deeper than you may expect and may result in the error message
	described in the "Symptoms" section of this article.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following: Use a nested IF field of
	20 or fewer levels.
	
	  -or-
	
	Do not use an INCLUDETEXT field to include a subdocument in a mail merge main
	document. Instead, make the subdocument containing the nested IF fields the mail
	merge main document.
	
	MORE INFORMATION
	================
	
	IF (If...Then...Else...) fields print information only if a condition you've
	specified is met. For example, you can use an IF field to create a form letter
	that goes only to clients who live within a particular ZIP Code area.
	
	IF fields perform one of two alternative actions, depending on a condition you
	specify. For example, the statement "If the weather is sunny, we'll go to the
	park; if not, we'll go to the movies" specifies a condition that must be met
	(sunny weather) for a certain action to take place (going to the park). If the
	condition is not met, an alternative action occurs (going to the movies).
	
	The following is an example of nesting MERGEFIELD fields 20 levels deep:
	
	  {IF {MERGEFIELD FIELD1} <> "" "{IF {MERGEFIELD FIELD2} <> ""
	  "{IF
	  {MERGEFIELD FIELD3} <> "" "{IF {MERGEFIELD FIELD4} <> "" "{IF
	  {MERGEFIELD FIELD5} <> "" "{IF {MERGEFIELD FIELD6} <> "" "{IF
	  {MERGEFIELD FIELD7} <> "" "{IF {MERGEFIELD FIELD8} <> "" "{IF
	  {MERGEFIELD FIELD9} <> "" "{IF {MERGEFIELD FIELD10} <> "" "{IF
	  {MERGEFIELD FIELD11} <> "" "{IF {MERGEFIELD FIELD12} <> "" {IF
	  {MERGEFIELD FIELD13} <> "" "{IF {MERGEFIELD FIELD14} <> "" "{IF
	  {MERGEFIELD FIELD15} <> "" "{IF {MERGEFIELD FIELD16} <> "" "{IF
	  {MERGEFIELD FIELD17} <> "" "{IF {MERGEFIELD FIELD18} <> "" "{IF
	  {MERGEFIELD FIELD19} <> "" "{IF {MERGEFIELD FIELD20} <> "" "True"
	  "False"}" "False"}" "False"}" "False"}" "False"}" "False"}" "False"}"
	  "False"}" "False"}" "False"}" "False"}" "False"}" "False"}" "False"}"
	  "False"}" "False"}" "False"}" "False"}" "False"}" "False"}
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q90393 WD: How to Use Nested IF Fields in a Print Merge Document
	
	For more information about conditional Word fields, click the Office Assistant,
	type "nesting if fields," click Search, and then click to view "Customize
	documents created with mail merge."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: mailmerge printmerge
	
	======================================================================
	Keywords          : kbfield winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}

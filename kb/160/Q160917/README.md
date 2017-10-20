---
layout: page
title: "Q160917: FIX: PAGE UP and PAGE DOWN in FormSet with Toolbar Crashes VFP"
permalink: /kb/160/Q160917/
---

## Q160917: FIX: PAGE UP and PAGE DOWN in FormSet with Toolbar Crashes VFP

{% raw %}

	Article: Q160917
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the PAGE UP or the PAGE DOWN keys in a Formset that contains a
	Toolbar, Visual FoxPro 5.0 crashes.
	
	WORKAROUND
	==========
	
	Put the following code in the KeyPress Method of the form. However, the best
	location would be in the KeyPress Method of the form super class:
	
	   DO CASE
	   CASE nKeyCode = 3 &&PageDown
	     NODEFAULT && Don't let VFP do it's own thing for this KeyStroke.
	     && Loop through the forms in the Formset.
	     FOR i = 1 TO THISFORMSET.FORMCOUNT
	     && Find the active form in the forms collection.
	        IF THISFORMSET.FORMS(i).NAME = THISFORMSET.ACTIVEFORM.NAME
	        && See if the next number(i) in the Formset is a valid number
	        && regarding FormCount.
	           IF BETWEEN(i+1,1,THISFORMSET.FORMCOUNT)
	           && If it is, see if the next form is a Form and not a Toolbar.
	              IF UPPER(THISFORMSET.FORMS(i+1).baseclass) = 'FORM'
	              && If it is, show the Form and get out.
	                 thisformset.FORMS(i+1).SHOW()
	                 EXIT
	              ENDIF
	           ELSE
	           && If the next number(i) was not a valid number regarding
	           && FormCount, start the loop again from the top. This keeps
	           && the "expected flow" or expected navigation of the forms.
	              FOR li = 1 TO THISFORMSET.FORMCOUNT
	              && See if the next form in the Formset is a Form and not a
	              && Toolbar.
	                 IF UPPER(THISFORMSET.FORMS(li).baseclass) = 'FORM'
	                 && If it is, Show the Form and get out.
	                    thisformset.FORMS(li).SHOW()
	                    EXIT
	                 ENDIF
	              ENDFOR
	           ENDIF
	        ENDIF
	     ENDFOR
	   CASE nKeyCode = 18 && PageUp
	     NODEFAULT && Don't let VFP do it's own thing for this KeyStroke.
	     && Loop through the forms in the Formset.
	     FOR i = 1 TO THISFORMSET.FORMCOUNT
	     && Find the active form in the forms collection.
	        IF THISFORMSET.FORMS(i).NAME = THISFORMSET.ACTIVEFORM.NAME
	        && See if the previous number(i) in the Formset is a valid number
	        && regarding FormCount.
	           IF BETWEEN(i-1,1,THISFORMSET.FORMCOUNT)
	           && If it is, see if the next form is a Form and not a Toolbar.
	              IF UPPER(THISFORMSET.FORMS(i-1).baseclass) = 'FORM'
	              && If it is, Show the Form and get out.
	                 thisformset.FORMS(i-1).SHOW()
	                 EXIT
	              ELSE
	              && If the previous number(i) was not a valid number regarding
	              && FormCount, start the loop again from the bottom. This keeps
	              && the "expected flow" or expected navigation of the forms.
	                 FOR li = THISFORMSET.FORMCOUNT TO 1 STEP -1
	                 && See if the next form in the Formset is a Form and not a
	                 && Toolbar.
	                    IF UPPER(THISFORMSET.FORMS(li).baseclass) = 'FORM'
	                    && If it is, Show the Form and get out.
	                       thisformset.FORMS(li).SHOW()
	                       EXIT
	                    ENDIF
	                 ENDFOR
	                 EXIT
	              ENDIF
	           ENDIF
	        ENDIF
	     ENDFOR
	   ENDCASE
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	When you use the PAGE UP or the PAGE DOWN keys in a Formset that contains a
	Toolbar, Visual FoxPro 5.0 crashes. The crash occurs when you use PAGE UP or
	PAGE DOWN and the next logical form in the Formset is a Toolbar form.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form and add a TextBox control to the form.
	
	2. Create a Formset.
	
	3. Add a Toolbar to the Formset.
	
	4. Save and run the form.
	
	5. Press the PAGE UP or PAGE DOWN keys repeatedly.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}

---
layout: page
title: "Q193506: BUG: SET(&quot;DATE&quot;,&quot;TO&quot;) Returns &quot;0&quot; Rather Than Valid Setting"
permalink: /kb/193/Q193506/
---

## Q193506: BUG: SET(&quot;DATE&quot;,&quot;TO&quot;) Returns &quot;0&quot; Rather Than Valid Setting

{% raw %}

	Article: Q193506
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the following command returns a zero (0) rather than a valid DATE
	variable setting (such as AMERICAN):
	
	     SET("DATE","TO")
	
	The zero might be a one or a two, depending on the date setting.
	
	CAUSE
	=====
	
	The SET("DATE") function supports a second argument that reports the date
	ordering. This second argument is documented as the number 1 in the Help file.
	If the SET("DATE") function detects a second argument, it reports the date
	ordering whether this argument is a number, logical, date, character or null
	value. Although using something other than the number 1 as the second argument
	does not cause an error, it should be avoided. Future changes to Visual FoxPro
	could cause the SET("DATE",<not 1>) syntax to create an error.
	
	RESOLUTION
	==========
	
	Rather than using the command SET("DATE","TO"), use the command SET("DATE"). If
	date ordering is desired, use the SET("DATE",1) syntax.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Use the following code in the Visual FoxPro Command window to explore the values
	returned by the SET("DATE") function when it is given a second argument:
	
	     SET DATE TO "British"
	     ? SET("DATE")
	     ? SET("DATE",1)   && British dates are ordered DMY, this returns 1.
	     ? SET("DATE","Hello")
	     ? SET("DATE",.NULL.)
	     ? SET("DATE",.F.)
	     ? SET("DATE",{05/05/05})
	     ? SET DATE TO "YMD"
	     ? SET("DATE","TO")
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code from the Visual FoxPro Command window:
	
	     SET DATE TO "American"
	     ? SET("DATE","TO")
	     ? SET("DATE")
	
	Notice the difference in what each returns.
	
	Additional query words: kbXBase kbVFp500abug kbVFp600bug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}

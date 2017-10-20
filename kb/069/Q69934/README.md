---
layout: page
title: "Q69934: INFO: #define Must Evaluate to Integer Const for #if Expression"
permalink: /kb/069/Q69934/
---

## Q69934: INFO: #define Must Evaluate to Integer Const for #if Expression

{% raw %}

	Article: Q69934
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the #define statement to define a constant, its value must evaluate
	to an integer constant if you are going to use it as the expression in an #if,
	#elif, or #else compiler directive. In addition, for any undefined constant that
	you use, the preprocessor assumes a value of zero.
	
	If you are not sure how the compiler is handling certain directives, you can
	compile the code with one of the preprocessor options (/P /E /EP). This will
	allow you to see the exact effect of the preprocessor directives on the code.
	
	MORE INFORMATION
	================
	
	If a #define'd constant that does not evaluate to an integer constant is used
	with the #if, #elif, or #else compiler directive, the following error message
	appears:
	
	  fatal error C1017: invalid integer constant expression
	
	> For example, this error occurs with the following code fragment:
	
	     #define CONSTANT_NAME "YES"
	     #if CONSTANT_NAME
	     ...
	     #endif
	
	Because CONSTANT_NAME evaluates to a string constant and not an integer constant,
	the #if directive generates a C1017 error and halts the compiler.
	
	The other notable situation is that any constant that is undefined is evaluated
	by the preprocessor to be zero. If an undefined constant is used inadvertently,
	unintended behavior may result. For example, in the following code fragment, the
	result is the reverse of what is actually intended:
	
	  #define CONSTANT_NAME YES
	  #if CONSTANT_NAME
	     Code to use on YES...
	  #elif CONSTANT_NAME==NO
	     Code to use on NO...
	  #endif
	
	In this example, YES is undefined, so it evaluates to zero. Therefore,
	CONSTANT_NAME is also zero. Thus, the #if expression "CONSTANT_NAME" evaluates
	to false and the "Code to use on YES" is removed by the preprocessor, which is
	clearly NOT the intended behavior. Furthermore, because NO is also undefined, it
	also evaluates to zero, which means that the #elif expression
	"CONSTANT_NAME==NO" evaluates to true (0 == 0). This causes the preprocessor NOT
	to remove the "Code to do on NO", which is also NOT the intended behavior.
	
	By compiling with one of the preprocessor options (/P /E /EP), you can observe
	the preprocessor output in order to see exactly how the preprocessor is
	interpreting all directives. For more information on these options, consult the
	documentation or online help that accompanies your particular version of the
	compiler.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}

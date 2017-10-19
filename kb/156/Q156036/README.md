---
layout: page
title: "Q156036: HOWTO: Use the Visual FoxPro Solutions Application"
permalink: /kb/156/Q156036/
---

## Q156036: HOWTO: Use the Visual FoxPro Solutions Application

	Article: Q156036
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro ships with a Solutions sample application, in
	VFP\Samples\Solution\Solution.app in Visual FoxPro 5.0 or the MSDN directory
	under Samples\vfp98\Solution\Solution.app in Visual FoxPro 6.0, that provides
	examples for accomplishing common database and programming tasks. This article
	offers some tips on how to find particular examples in the Solutions application
	and more information about each example.
	
	MORE INFORMATION
	================
	
	The Solutions sample has a separate help file, in
	VFP\Samples\Solution\Solution.hlp in Visual FoxPro 5.0 or the MSDN directory
	under Samples\vfp98\Solution\Solution.chm in Visual FoxPro 6.0, that provides an
	overview of the sample and a description of every element in the sample.
	
	You can choose the Behind the Scenes button on any form to open the description
	for that form. If you run a query or report from SOLUTION.APP, open the
	description by pressing the F1 key. You can see a list of all components by
	clicking on "List of Components" in the non-scrolling region of the Solutions
	Sample topic. When you choose the Index button in the Help file, you can search
	for samples by keywords. For instance, you could search for BEGIN TRANSACTION to
	find the topic for the Nest Transactions sample.
	
	You can also filter samples by category in the Solution form by choosing the
	"View samples by filtered list" Option button. If you were interested in
	examples using arrays, for example, you could choose "Array Manipulation" in the
	drop-down list to display the samples that use arrays, whether or not that is
	the primary focus of the sample.
	
	Another way to look at the sample applications is to open SOLUTION.DBF. For
	example:
	
	     USE SOLUTION
	
	     BROWSE FOR type != "N"
	
	A type of "N" indicates that the record is not a sample, but rather a category
	for the treeview in solution.scx. The DESCRIPT field contains a record for each
	component in the Solutions sample and a brief description of the sample.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

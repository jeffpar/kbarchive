---
layout: page
title: "Q156757: How to Dynamically Populate a Select Control with IDC"
permalink: /kb/156/Q156757/
---

## Q156757: How to Dynamically Populate a Select Control with IDC

	Article: Q156757
	Product(s): Internet Information Server
	Version(s): 1.0 2.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Internet Database Connector (IDC) with Internet Information
	Server (IIS) to populate a HTML Select form control.
	
	MORE INFORMATION
	================
	
	The following HTML sample can be used in an HTX file and will illustrate how to
	return database information to dynamically populate a HTML form Select control.
	
	The following form section pasted into a HTX file will dynamically populate the
	select control ("JobType") with the return values from the "Title" field.
	
	  <FORM>
	
	  Job Type: <SELECT NAME="JobType">
	  <%begindetail%>
	     <option><%Title%></option>
	  <%enddetail%>
	  </select>
	
	  </FORM>
	
	For more information look in Chapter 8 of the Online Documentation for IIS that
	details the Internet Database Connector and covers publishing dynamic data on
	the Web. Additionally, you can view the JobForum IDC database example
	application found on the following Web site:
	
	  http://msdn.microsoft.com/library/techart/msdn_jobforum.htm
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis200 kbiis100
	Version           : 1.0 2.0
	Issue type        : kbhowto
	
	=============================================================================
	

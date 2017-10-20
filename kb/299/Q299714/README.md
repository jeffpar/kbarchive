---
layout: page
title: "Q299714: HOW TO: Call a COM Object from Active Server Pages"
permalink: /kb/299/Q299714/
---

## Q299714: HOW TO: Call a COM Object from Active Server Pages

{% raw %}

	Article: Q299714
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbCodeSnippet kbHOWTOmaster
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Active Server Pages 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Calling a COM Object from an ASP Page
	
	   - Create a Component in Visual Basic
	- Create an Instance of a Component
	- Understanding Component Interfaces
	
	- Pitfalls
	
	- REFERENCES
	
	SUMMARY
	=======
	
	This step-by-step article demonstrates how to call a Component Object Model
	(COM) object from within an Active Server Pages (ASP) page.
	
	Requirements
	------------
	
	The following list outlines the recommended hardware, software, network
	infrastructure and service packs that you need:
	
	- Microsoft Internet Information Server (IIS) or Personal Web Server (PWS)
	- Microsoft Visual Basic
	
	Calling a COM Object from an ASP Page
	-------------------------------------
	
	This sample illustrates the common scenario in which you develop a COM component,
	create the object from an ASP page, and then call the object's methods.
	
	Create a Component in Visual Basic:
	
	To build a COM component with Visual Basic, follow these steps:
	
	1. Start Visual Basic.
	
	2. Create a new ActiveX DLL project named CustomerLib.
	
	3. Rename the class "clsCustomer" (without the quotation marks).
	
	4. Paste the following code in class module:
	
	  	Function GetCustomerName() As String
	  		GetCustomerName = "David Johnson"
	  	End Function
	
	5. On the File menu, click Make CustomerLib.dll to compile the project.
	
	Create an Instance of a Component:
	
	Use the following code to instantiate the COM component from ASP:
	
	  <%@ Language=VBScript %>
	  <%
	  	dim objCustomer
	  	dim strCustomerName
	
	  	' Create the component.	
	  	set objCustomer=server.createobject("CustomerLib.clsCustomer")
	
	  	' Call the method.
	  	strCustomerName = objCustomer.GetCustomerName
	
	  	' Display the return value.
	  	Response.Write strCustomerName
	  %>
	
	Understanding Component Interfaces:
	
	An interface is simply a list of related methods, properties, and events. The
	interface does not determine what happens within the methods. Instead, the
	interface determines what methods are available, as well as the structure or
	"signature" of each method (the method name, argument list, and return type).
	The component that implements the particular interface must determine how those
	methods are executed. Each COM component implements one or more of these custom
	interfaces, as well as one or more standard COM interface for COM plumbing.
	
	In the preceding sample, Visual Basic creates the interface named _clsCustomer,
	which contains one method (GetCustomerName). The clsCustomer class then
	implements this interface as its default interface and defines how the method
	will be executed (by returning "David Johnson").
	
	Another class can implement this interface differently and return any other
	string according to any logic that the class chooses. Although you can use the
	Implements keyword to implement more than one interface in Visual Basic,
	scripting clients (such as ASP) can only use the default interface. This is
	important to remember when you design components that you want to use from ASP.
	
	Pitfalls
	--------
	
	You must register COM objects on your server. If the vendor's installation
	program does not register COM objects for you, you can use Regsvr32.exe to
	register the component on the computer.
	
	REFERENCES
	==========
	
	For more information, refer to the following Microsoft Web sites:
	
	  Microsoft COM Home Page
	  http://www.microsoft.com/com/
	
	  COM Objects in ASP
	  http://msdn.microsoft.com/library/default.asp?URL=/library/en-us/dnasp/html/comtutorial.asp
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbCodeSnippet kbHOWTOmaster 
	Technology        : kbVBSearch kbAudDeveloper kbASPsearch kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}

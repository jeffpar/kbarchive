---
layout: page
title: "Q158541: PRB: C2440 Error When Using CMap and User Defined Key Type"
permalink: kb/158/Q158541/
---

## Q158541: PRB: C2440 Error When Using CMap and User Defined Key Type

	Article: Q158541
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kberrmsg kbtemplate kbMFC kbVC400 kbVC410 kbGrpDSMFCATL kbCollectionClass
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Cmap-templated collection class with a user-defined class as the
	data type for key arguments, the compiler generates the following compiler
	error:
	
	  afxtempl.h(97) : error C2440: 'abstract declarator' :
	
	  cannot convert from 'class CClass' to 'unsigned long'
	
	where CClass is the name of the user-defined class.
	
	CAUSE
	=====
	
	The default implementation of CMap's HashKey function takes an DWORD (unsigned
	long) as a parameter. The compiler does not know how to convert from a
	user-defined class type to an unsigned long.
	
	RESOLUTION
	==========
	
	Create a static template function to generate a custom HashKey value.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	This is a sample declaration of a CMap that uses a user-defined class for as
	data-type for a Cmap:
	
	     #include <afxtempl.h>
	
	     class CEmployee : public CObject
	     {
	     public:
	     CString m_firstName;
	     CString m_lastName;
	
	     public:
	     CEmployee(){ };
	
	     // Copy constructor required by Cmap.
	     CEmployee(const CEmployee& n)
	     {
	     m_firstName = n.m_firstName;
	     m_lastName = n.m_lastName;
	     }
	
	     // Operator= is required by Cmap.
	     CEmployee& operator=(const CEmployee& n)
	     {
	     m_firstName = n.m_firstName;
	     m_lastName = n.m_lastName;
	     return *this;
	     }
	
	     BOOL AFXAPI operator==(const CEmployee& n) const
	     {
	     return m_firstName == n.m_firstName
	     && m_lastName == n.m_lastName;
	     }
	     };
	
	     template<>
	     inline UINT AFXAPI HashKey(CEmployee& key)
	     {
	     return HashKey((LPCTSTR)key.m_lastName) +
	                     HashKey((LPCTSTR)key.m_firstName);
	     }
	
	     // Declare the CMap object.
	     CMap<CEmployee, CEmployee&, CEmployee, CEmployee&> EmployeeMap;
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtemplate kbMFC kbVC400 kbVC410 kbGrpDSMFCATL kbCollectionClass 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbprb
	
	=============================================================================
	

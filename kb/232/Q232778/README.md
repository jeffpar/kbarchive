---
layout: page
title: "Q232778: FIX: MIDL Gives Warning MIDL2039 When Decimal Parameter Is Used"
permalink: /kb/232/Q232778/
---

## Q232778: FIX: MIDL Gives Warning MIDL2039 When Decimal Parameter Is Used

	Article: Q232778
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCOMt kbVC500bug kbVC600bug kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile an .idl file with decimal as the type of parameter for a
	method, you get an MIDL2039 warning. But it is documented that the decimal is a
	valid type for a parameter (for example, search the MSDN Library Index for
	"oleautomation").
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Copy the following code into a new file and save it as an .idl file.
	
	  import "oaidl.idl";
	  import "ocidl.idl";
	  [
	  	object,
	  	uuid(DE4C1D8D-C007-11D2-B978-00AA00C0018D),
	  	dual,
	  	helpstring("IFoo1 Interface"),
	  	pointer_default(unique)
	  ]
	  interface IFoo1 : IDispatch
	  {
	  };
	
	  [
	  	uuid(DE4C1D80-C007-11D2-B978-00AA00C0018D),
	  	version(1.0),
	  	helpstring("huh 1.0 Type Library")
	  ]
	  library HUHLib
	  {
	  	importlib("stdole2.tlb");
	
	  	[
	  		uuid(DE4C1D8F-C007-11D2-B978-00AA00C0018D),
	  		hidden,
	  		helpstring("_IFoo1Events Interface")
	  	]
	  	dispinterface _IFoo1Events
	  	{
	  		properties:
	  		methods:
	  		[id(1), helpstring("method MIDL2039")] HRESULT MIDL2039([in] Decimal d);
	  	};
	
	  	[
	  		uuid(DE4C1D8E-C007-11D2-B978-00AA00C0018D),
	  		helpstring("Foo1 Class")
	  	]
	  	coclass Foo1 {
	
	  		[default] interface IFoo1;
	  		[default, source] dispinterface _IFoo1Events;
	  	};
	  };
	
	2. Now compile it with Microsoft Interface Definition Language (MIDL) and see
	  the warning:
	
	  huh.idl(38) : warning MIDL2039 : interface does not conform to 
	  [oleautomation] attribute :   [ Parameter 'd' of Procedure 'MIDL2039' ( 
	  Dispinterface '_IFoo1Events' ) ]
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCOMt kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
